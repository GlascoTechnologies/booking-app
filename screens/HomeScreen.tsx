// import React, {useEffect, useMemo, useState, useCallback, memo} from 'react';
// import {
//   View,
//   StyleSheet,
//   TextInput,
//   Text,
//   StatusBar,
//   Image,
// } from 'react-native';
// import {RecyclerListView, DataProvider} from 'recyclerlistview';

// import HorizontalRecylerList from '../components/horizontalRecylerList';
// import {data, innderData, innerServices} from '../utils/Data';

// import {LayoutUtil, ViewTypes} from '../utils/LayoutUtility';
// import {ImageSlider} from 'react-native-image-slider-banner';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {
//   AdjustmentsVerticalIcon,
//   ChevronDownIcon,
//   MagnifyingGlassCircleIcon,
//   UserIcon,
// } from 'react-native-heroicons/outline';
// import axios from 'axios';
// import {ActivityIndicator} from 'react-native';

// const MemoizedImageSlider = React.memo(({images}) => (
//   <ImageSlider
//     data={images}
//     autoPlay={false}
//     caroselImageStyle={{
//       resizeMode: 'stretch',
//       height: 158,
//     }}
//     closeIconColor="#fff"
//     indicatorContainerStyle={{
//       bottom: -15,
//     }}
//   />
// ));

// function HomeScreen() {
//   const cities = useMemo(
//     () => ['shadnagar', 'kothur', 'thimmapur', 'shamshabad'],
//     [],
//   );
//   const city = 'shadnagar';

// const [realData, setRealData] = useState([]);
// const [cityShops, setCityShops] = useState([]);
// const [loading, setLoading] = useState(false);
// const [loaded, setLoaded] = useState(false);

// const fetchData = useMemo(
//   () => async () => {
//     setLoaded(true);

//     try {
//       const res = await axios.get(
//         `https://booking-dynamic-test.onrender.com/api/hotels/countByCity?cities=${cities[0]},${cities[1]},${cities[2]},${cities[3]}`,
//       );

//       const shopsCount = [
//         {
//           _id: '1',
//           type: 'innerData',
//           count: res?.data[0],
//           title: cities[0],
//           uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp',
//         },
//         {
//           _id: '2',
//           type: 'innerData',
//           count: res?.data[1],
//           title: cities[1],
//           uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/BBBB_-_Copy_bv4xzn.webp',
//         },
//         {
//           _id: '3',
//           type: 'innerData',
//           count: res?.data[2],
//           title: cities[2],
//           uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/CCCC_fxyi8o.webp',
//         },
//         {
//           _id: '4',
//           type: 'innerData',
//           count: res?.data[3],
//           title: cities[3],
//           uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/DDDD_dzfgsb.webp',
//         },
//       ];
//       let filterServices1 = shopsCount?.map(data => {
//         return {...data, type: innderData};
//       });
//       setCityShops(filterServices1);
//     } catch (err) {
//       console.log(err);
//     }
//     setLoaded(false);
//   },
//   [cities],
// );
// const getData = useMemo(
//   () => async () => {
//     setLoading(true);
//     const {data} = await axios.get(
//       `https://booking-dynamic-test.onrender.com/api/hotels?type=saloon&city=${city}&min=0&max= 999`,
//     );
//     let filterServices = data?.slice(0, 4).map(data1 => {
//       return {...data1, type: innderData};
//     });
//     setRealData(filterServices);
//     setLoading(false);
//   },
//   [city],
// );

// useEffect(() => {
//   getData();
//   fetchData();
// }, [fetchData, getData]);

//   const dataProvider = useMemo(
//     () =>
//       new DataProvider((r1, r2) => {
//         return r1 !== r2;
//       }).cloneWithRows(data),
//     [],
//   );

//   const layoutProvider = useMemo(
//     () => LayoutUtil.getLayoutProvider(dataProvider),
//     [dataProvider],
//   );

//   const rowRenderer = useCallback(
//     (type, data, index) => {
//       const {innerData, innerServices} = data;
//       switch (type) {
//         case ViewTypes.GRID:
//           return (
//             <View>
//               <MemoizedImageSlider
//                 images={[
//                   {
//                     img: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679294695/Custom-dimensions-419x158-px-_2__1_kbwco6.webp',
//                   },
//                   {
//                     img: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679294695/Custom-dimensions-419x158-px-_2__1_kbwco6.webp',
//                   },
//                   {
//                     img: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679244801/Custom-dimensions-419x158-px_yotfk4.webp',
//                   },
//                 ]}
//               />
//             </View>
//           );
//         case ViewTypes.FULL:
//           return (
//             cityShops.length > 0 &&
//             realData.length > 0 && (
//               <HorizontalRecylerList
//                 data={
//                   (index === 2 && realData) ||
//                   (index === 3 && cityShops) ||
//                   innerData
//                 }
//                 style={{isHorizontal: false}}
//                 index={index}
//               />
//             )
//           );
//         case ViewTypes.HALF_FULL:
//           return (
//             <HorizontalRecylerList
//               data={innerServices}
//               style={{isHorizontal: true}}
//               index={index}
//             />
//           );
//         default:
//           return null;
//       }
//     },
//     [cityShops, realData],
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         translucent={true} // Set to true to make the status bar translucent
//         backgroundColor="transparent" // Set the background color to transparent
//         barStyle="dark-content" // Set the color of the status bar content
//       />
//       <View className="flex-row pb-3 items-center space-x-2 px-2.5">
//         <Image
//           source={{
//             uri: 'https://links.papacom/wru',
//           }}
//           className="h-8 w-8 bg-gray-300 p-4 rounded-full ml-1"
//         />

//         <View className="flex-1">
//           <Text className="font-bold text-black text-xs">Home</Text>
//           <Text className="font-bold text-black text-sm">
//             Current Location
//             <ChevronDownIcon size={12} color="#00CCBB" />
//           </Text>
//         </View>
//         <UserIcon size={30} color="#00ccbb" />
//       </View>

//       {/* search */}

//       <View className="flex-row items-center space-x-2 pb-2 px-3.5 ">
//         <View className=" flex-row flex-1 space-x-4 bg-gray-200  items-center rounded ">
//           <Text className="ml-2">
//             <MagnifyingGlassCircleIcon color="#00CCBB" size={25} />
//           </Text>
//           <TextInput
//             placeholder="Search city name"
//             className="w-10/12  rounded h-11 text-[#00ccbb]"
//             placeholderTextColor="gray"
//           />
//         </View>

//         <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
//       </View>

//       {loading || loaded ? (
//         <View className="flex-1 items-center justify-center">
//           <ActivityIndicator />
//         </View>
//       ) : (
//         <RecyclerListView
//           contentContainerStyle={{margin: 3}}
//           layoutProvider={layoutProvider}
//           dataProvider={dataProvider}
//           rowRenderer={rowRenderer}
//         />
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     backgroundColor: '#daeaf6',
//   },
// });

// export default memo(HomeScreen);

import React, {useMemo, useState, useEffect, memo} from 'react';

import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  Image,
} from 'react-native';
import {RecyclerListView, DataProvider} from 'recyclerlistview';
import HorizontalRecylerList from '../components/horizontalRecylerList';
import {data, innderData} from '../utils/Data';
// import Card from '../components/MainCard';
import {LayoutUtil, ViewTypes} from '../utils/LayoutUtility';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassCircleIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import axios from 'axios';
// import ServiceCard from '../components/ServiceCard';
import {ImageSlider} from 'react-native-image-slider-banner';
const MemoizedImageSlider = memo(({images}) => (
  <ImageSlider
    data={images}
    autoPlay={false}
    caroselImageStyle={{
      resizeMode: 'stretch',
      height: 158,
    }}
    closeIconColor="#fff"
    indicatorContainerStyle={{
      bottom: -15,
    }}
  />
));
export default function HomeScreen() {
  const [realData, setRealData] = useState([]);
  const [cityShops, setCityShops] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const {data: fata} = await axios.post(
        'http://192.168.0.104:8800/api/homescreen',
        {
          city: 'shadnagar',
        },
      );
      setRealData(fata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(realData);
  let dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });

  dataProvider = dataProvider.cloneWithRows(data);

  let layoutProvider = LayoutUtil.getLayoutProvider(dataProvider);

  const rowRenderer = (type, data) => {
    console.log(type);
    const {innerData} = data;
    switch (type) {
      case ViewTypes.GRID:
        return (
          <MemoizedImageSlider
            images={[
              {
                img: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679294695/Custom-dimensions-419x158-px-_2__1_kbwco6.webp',
              },
              {
                img: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679294695/Custom-dimensions-419x158-px-_2__1_kbwco6.webp',
              },
              {
                img: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679244801/Custom-dimensions-419x158-px_yotfk4.webp',
              },
            ]}
          />
        );

      case ViewTypes.FULL:
        return <HorizontalRecylerList data={innerData} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true} // Set to true to make the status bar translucent
        backgroundColor="transparent" // Set the background color to transparent
        barStyle="dark-content" // Set the color of the status bar content
      />
      <View className="flex-row pb-3 items-center space-x-2 px-2.5">
        <Image
          source={{
            uri: 'https://links.papacom/wru',
          }}
          className="h-8 w-8 bg-gray-300 p-4 rounded-full ml-1"
        />

        <View className="flex-1">
          <Text className="font-bold text-black text-xs">Home</Text>
          <Text className="font-bold text-black text-sm">
            Current Location
            <ChevronDownIcon size={12} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={30} color="#00ccbb" />
      </View>

      {/* search */}

      <View className="flex-row items-center space-x-2 pb-2 px-3.5 ">
        <View className=" flex-row flex-1 space-x-4 bg-gray-200  items-center rounded ">
          <Text className="ml-2">
            <MagnifyingGlassCircleIcon color="#00CCBB" size={25} />
          </Text>
          <TextInput
            placeholder="Search city name"
            className="w-10/12  rounded h-11 text-[#00ccbb]"
            placeholderTextColor="gray"
          />
        </View>

        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>

      <RecyclerListView
        contentContainerStyle={{}}
        layoutProvider={layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,

    backgroundColor: 'white',
  },
});
