import React, {useState, useEffect, memo, useMemo} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';

import {RecyclerListView, DataProvider} from 'recyclerlistview';

import {data} from '../utils/ShopsData';

import {LayoutUtil, ViewTypes} from '../utils/LayoutUtility1';
import useFetch from '../utils/useFetch';
import axios from 'axios';
import VerticalList from '../components/shop/VerticalList';
import {ImageSlider} from 'react-native-image-slider-banner';
import {innderData} from '../utils/Data';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AdjustmentsVerticalIcon,
  ArrowLeftIcon,
  MagnifyingGlassCircleIcon,
} from 'react-native-heroicons/outline';

function ShopScreen({route}) {
  const {city, selectedColony} = route.params;

  const [loaded, setLoaded] = useState(false);

  const [colonyWiseShops, setColonyWiseShops] = useState([]);
  const [colonies, setColonies] = useState([]);

  const navigation = useNavigation();

  const {
    data: fata,
    loading,
    error,
  } = useFetch(
    `https://booking-dynamic-test.onrender.com/api/hotels?city=${city}&min=0&max=999`,
  );

  const realData = selectedColony === undefined ? fata : colonyWiseShops;
  let filterShops = realData?.map(data => {
    return {...data, type: innderData};
  });

  let dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });

  dataProvider = dataProvider?.cloneWithRows(data);

  let layoutProvider = LayoutUtil?.getLayoutProvider(
    dataProvider,
    realData?.length,
  );

  const getAllColonies = async () => {
    try {
      const response = await axios.post(
        'https://booking-dynamic-test.onrender.com/api/hotels/allColonies',
        {
          destination: city,
        },
      );
      setColonies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllColonies();
  }, []);

  useEffect(() => {
    const getColonyWiseShops = async colony => {
      try {
        setLoaded(true);
        const shops = await axios.post(
          'https://booking-dynamic-test.onrender.com/api/hotels/getColonyWiseShops',
          {
            colony,
          },
        );
        setLoaded(false);
        console.log(shops?.data);
        setColonyWiseShops(shops?.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (selectedColony !== '') {
      loaded === false && getColonyWiseShops(selectedColony);
    }

    getColonyWiseShops(selectedColony);
  }, [selectedColony]);

  const rowRenderer = type => {
    switch (type) {
      case ViewTypes.GRID:
        return (
          <View className="">
            <ImageSlider
              data={[
                {
                  img: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679210383/Custom-dimensions-844x320-px_lfk3uj.webp',
                },

                {
                  img: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679294695/Custom-dimensions-419x158-px-_2__1_kbwco6.webp',
                },
                {
                  img: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679244801/Custom-dimensions-419x158-px_yotfk4.webp',
                },
              ]}
              autoPlay={false}
              caroselImageStyle={{
                resizeMode: 'stretch',
                height: 150,
              }}
              // onItemChanged={item => console.log('item', item)}
              closeIconColor="#fff"
              indicatorContainerStyle={{
                bottom: -15,
              }}
            />
          </View>
        );

      case ViewTypes.FULL_GRID:
        return filterShops?.length > 0 && <VerticalList data={filterShops} />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row items-center space-x-3 px-3.5 pt-3 ">
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <ArrowLeftIcon size={25} color="#00CCBB" />
        </TouchableOpacity>
        <Text className="text-black text-xl font-bold">{city} saloons</Text>
      </View>
      {colonies.length > 0 ? (
        <View className="flex-row items-center space-x-2 pb-3.5 px-3.5  pt-4  mx-1  ">
          <TouchableOpacity
            className=" flex-row flex-1 space-x-4 h-10 bg-white items-center rounded-full border border-[#00ccbb]"
            onPress={() => navigation.navigate('Search', {colonies, city})}>
            <Text className="ml-2">
              <MagnifyingGlassCircleIcon color="#00CCBB" size={25} />
            </Text>
            <Text className="text-gray-400">Search your colony ...</Text>
          </TouchableOpacity>

          <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
        </View>
      ) : (
        <View className="mt-3">
          <ActivityIndicator />
        </View>
      )}

      {loading ? (
        <View className="flex-1 items-center justify-center ">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <RecyclerListView
          layoutProvider={layoutProvider}
          dataProvider={dataProvider}
          rowRenderer={rowRenderer}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default memo(ShopScreen);
