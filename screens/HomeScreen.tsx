import React, {useMemo, useState, useEffect, memo} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import {RecyclerListView, DataProvider} from 'recyclerlistview';

import {data} from '../utils/Data';
import {LayoutUtil, ViewTypes} from '../utils/LayoutUtility';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassCircleIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import axios from 'axios';

import {ImageSlider} from 'react-native-image-slider-banner';
import {FlashList} from '@shopify/flash-list';
import FeaturedRow from '../components/FeaturedRow';

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

function HomeScreen() {
  const allRowHeaders = useMemo(
    () => [
      {
        id: 0,
        title: 'Services',
        desc: 'Easytym Services',
      },
      {
        id: 1,
        title: 'Best Saloons for you',
        desc: 'We picked best saloons for you',
      },
      {id: 2, title: 'Saloons by Area', desc: 'Find saloons by area'},
      {id: 3, title: 'Offers', desc: 'Latest offers for you'},
    ],
    [],
  );
  const cities = useMemo(
    () => ['shadnagar', 'kothur', 'thimmapur', 'shamshabad'],
    [],
  );
  const services = useMemo(
    () => ['Hair Saloons', 'Beauty Parlours', 'Laundry', 'Dry Cleaning'],
    [],
  );
  const [realData, setRealData] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const {data: fata} = await axios.post(
        'https://booking-dynamic-test.onrender.com/api/homescreen',
        {
          city: 'shadnagar',
        },
      );
      setRealData(fata);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    fetchData();
  }, []);

  const shopsCount = [
    {
      _id: 1,

      count: realData[1]?.cityCountShops?.[0],
      name: cities[0],
      uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp',
    },
    {
      _id: 2,

      count: realData[1]?.cityCountShops?.[1],
      name: cities[1],
      uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/BBBB_-_Copy_bv4xzn.webp',
    },
    {
      _id: 3,

      count: realData[1]?.cityCountShops?.[2],
      name: cities[2],
      uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/CCCC_fxyi8o.webp',
    },
    {
      _id: 4,

      count: realData[1]?.cityCountShops?.[3],
      name: cities[3],
      uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/DDDD_dzfgsb.webp',
    },
  ];

  const dataProvider = useMemo(
    () =>
      new DataProvider((r1, r2) => {
        return r1 !== r2;
      }).cloneWithRows(data),
    [],
  );

  const layoutProvider = useMemo(
    () => LayoutUtil.getLayoutProvider(dataProvider),
    [dataProvider],
  );

  const rowRenderer = (type, data, index) => {
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
        return (
          shopsCount?.length > 0 && (
            <FlashList
              data={allRowHeaders}
              keyExtractor={(item, i) => i.toString()}
              renderItem={renderItem}
              scrollEnabled={false}
              estimatedItemSize={200}
              shouldRasterizeIOS={true}
              renderToHardwareTextureAndroid={true}
              removeClippedSubviews={true}
            />
          )
        );

      default:
        return null;
    }
  };
  const renderItem = ({item}) => {
    return (
      <FeaturedRow
        id={item.id}
        title={item.title}
        description={item.desc}
        data={
          item.id == 0
            ? services
            : item.id == 1
            ? realData[0]?.shops
            : shopsCount
        }
      />
    );
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
            uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/BBBB_-_Copy_bv4xzn.webp',
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

      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={{height: 1000}}>
          <RecyclerListView
            contentContainerStyle={{}}
            layoutProvider={layoutProvider}
            dataProvider={dataProvider}
            rowRenderer={rowRenderer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
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

export default memo(HomeScreen);
