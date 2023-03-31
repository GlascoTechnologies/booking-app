import {useNavigation, useRoute} from '@react-navigation/native';
import React, {
  useState,
  memo,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  ToastAndroid,
} from 'react-native';
import time from '../utils/time';
import {Picker} from '@react-native-picker/picker';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import {
  ArrowLeftIcon,
  MapPinIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import {ImageSlider} from 'react-native-image-slider-banner';

import IndividualShopServices from '../components/IndividualShopServices';
import IndividualShopCrew from '../components/IndividualShopCrew';

import axios from 'axios';

import {options} from '../components/getOptions';
// import ReviewCard from '../components/ReviewCard';
// import FlashList from '@shopify/flash-list/dist/FlashList';
import {
  compareTimeDiff,
  convertToMilliseconds,
} from '../components/getTimeValuation';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {newSearch} from '../redux/searchSlice';

const IndividualShopScreen = ({route}) => {
  const shopId = route?.params?.id;

  const dispatch = useDispatch();

  const scrollViewRef = useRef();
  const navigation = useNavigation();
  const search = useSelector(state => state.search);
  const [loading, setLoading] = useState(true);
  const [shop, setShop] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [datra, setDatra] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const {data} = await axios.get(
        `https://booking-dynamic-test.onrender.com/api/shopscreen/${shopId}`,
      );

      setShop(data[0]?.hotelData);
      setLoading(false);

      const res = data[1]?.roomData[0]?.roomNumbers?.map((id, i) => {
        return {
          id: id._id,
          dates: id.unavailableDates?.map(item => {
            return {date: item.date, values: item.values};
          }),
        };
      });
      setDatra(res);
    } catch (err) {
      console.log(err);
    }
  }, [shopId]);

  useEffect(() => {
    fetchData();
  }, []);

  const scrollToSection = useCallback((x, y) => {
    scrollViewRef?.current.scrollTo({x: x, y: y, animated: true});
  }, []);

  const handleClick = useCallback(() => {
    if (selectedTime == null) {
      return ToastAndroid.showWithGravity(
        'Sorry, something went wrong!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50,
      );
    }

    let result = convertToMilliseconds(selectedTime);
    let result2 = compareTimeDiff(result);

    let day1 = moment(selectedDate).format('MMM Do YY');
    let day2 = moment(new Date()).format('MMM Do YY');

    if (day1 === day2 && result2 >= 0) {
      return ToastAndroid.showWithGravity(
        'Please select a valid time!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50,
      );
    }

    dispatch(
      newSearch({
        type: 'saloon',
        destination: shop?.city,
        value: moment(selectedDate).format('MMM Do YY'),
        time: selectedTime,
      }),
    );

    navigation.navigate('Reserve');
  }, [selectedDate, selectedTime]);

  const memoizedValues = useMemo(() => {
    let min10 = [];
    let min20 = [];
    let min30 = [];
    let min40 = [];
    let min50 = [];
    let min60 = [];
    let min70 = [];
    let min80 = [];
    let min90 = [];
    let min100 = [];
    let min110 = [];
    let min120 = [];

    for (let i = 0; i < options?.length; i++) {
      if (selectedTime === options[i].value && options[i].id === i) {
        min10 = [i];
        min20 = [i, i + 1];
        min30 = [i, i + 1, i + 2];
        min40 = [i, i + 1, i + 2, i + 3];
        min50 = [i, i + 1, i + 2, i + 3, i + 4];
        min60 = [i, i + 1, i + 2, i + 3, i + 4, i + 5];
        min70 = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6];
        min80 = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7];
        min90 = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8];
        min100 = [
          i,
          i + 1,
          i + 2,
          i + 3,
          i + 4,
          i + 5,
          i + 6,
          i + 7,
          i + 8,
          i + 9,
        ];
        min110 = [
          i,
          i + 1,
          i + 2,
          i + 3,
          i + 4,
          i + 5,
          i + 6,
          i + 7,
          i + 8,
          i + 9,
          i + 10,
        ];
        min120 = [
          i,
          i + 1,
          i + 2,
          i + 3,
          i + 4,
          i + 5,
          i + 6,
          i + 7,
          i + 8,
          i + 9,
          i + 10,
          i + 11,
        ];
      }
    }

    return {
      min10,
      min20,
      min30,
      min40,
      min50,
      min60,
      min70,
      min80,
      min90,
      min100,
      min110,
      min120,
    };
  }, [selectedTime]);

  const [selectValue, setselectValue] = useState(
    selectedTime
      ? options.find(option => option.value === selectedTime).id
      : null,
  );

  const today = useMemo(
    () => moment(selectedDate).format('MMM Do YY'),
    [selectedDate],
  );

  const filter = useMemo(() => {
    const filteredData = datra?.map(date => {
      const answer = date.dates.filter(item => today === item.date);
      return answer;
    });
    return filteredData;
  }, [datra, today]);

  const findMatchingArrays = useCallback(arr => {
    const matchedArrays = [];
    for (let i = 0; i < arr?.length; i++) {
      const mergedDates = [...new Set(arr[i].flat())];
      matchedArrays.push(mergedDates);
    }
    return matchedArrays;
  }, []);

  const mergedReady = useMemo(() => {
    const mergedData = filter.map((item, i) => {
      const allValues = item.map(date => {
        return date.values;
      });
      return allValues;
    });
    return mergedData;
  }, [filter]);

  const matchedArrays = useMemo(() => {
    return findMatchingArrays(mergedReady);
  }, [findMatchingArrays, mergedReady]);

  return loading ? (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <ScrollView
      className="bg-white"
      ref={scrollViewRef}
      scrollEventThrottle={16}
      shouldRasterizeIOS={true}
      renderToHardwareTextureAndroid={true}
      removeClippedSubviews>
      <View className="relative ">
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
            height: 180,
          }}
          // onItemChanged={item => console.log('item', item)}
          closeIconColor="#fff"
          indicatorContainerStyle={{
            bottom: -15,
          }}
          shouldRasterizeIOS={true}
          renderToHardwareTextureAndroid={true}
        />

        <View className="px-3 mt-3 mb-3">
          <Text className="text-black font-bold text-2xl">{shop?.name}</Text>
          <View className="flex-row mt-1 ">
            <MapPinIcon size={17} color="#00CCBB" />
            <Text className="text-gray-600 pl-0.5 text-xs">
              {shop?.address}
            </Text>
            <Text className="text-gray-600 pl-0.5 text-xs">
              -- {shop?.distance} m from center
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-1 items-center">
          <View className="bg-green-500 px-5 space-x-1 py-1 flex items-center justify-center flex-row rounded-md w-16 ml-4  mr-1">
            <StarIcon color="white" size={20} />
            <Text className="text-white font-bold">
              {shop?.rating?.toFixed(1)}
            </Text>
          </View>
          <Text
            className="text-[#00ccbb]"
            onPress={() => scrollToSection(0, 600)}>
            See all {shop?.numReviews} reviews
          </Text>
        </View>
        <Text className="text-black px-4 pt-3 ">{shop?.desc}</Text>

        <TouchableOpacity
          className="absolute top-14 left-5 bg-gray-100 rounded-full p-2"
          onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={15} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="pt-3">
        <Text className="text-black text-2xl font-bold px-4">Select date</Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date()}
          endDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
          initialSelectedDate={selectedDate}
          onSelectedDateChange={date => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={55}
          itemHeight={50}
          itemRadius={10}
          selectedItemBackgroundColor="#00ccbb"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={{
            marginTop: 5,
            paddingHorizontal: 4,
            backgroundColor: 'white',
          }}
        />
      </View>

      <View className="h-auto mx-3.5 my-2 rounded-lg bg-[#00ccbb]">
        <Picker
          selectedValue={selectedTime}
          needsOffscreenAlphaCompositing={true}
          onValueChange={itemValue => {
            setSelectedTime(itemValue);
            const selectedOption = options.find(
              option => option.value === itemValue,
            );
            setselectValue(selectedOption?.id);
          }}>
          <Picker.Item label="Select Time" value={null} />
          {options.map((item, i) => {
            const labelWithExtraText = `${item.value} ${
              matchedArrays[0]?.includes(i) && !matchedArrays[1]?.includes(i)
                ? '  S-2 available'
                : matchedArrays[1]?.includes(i) &&
                  !matchedArrays[0]?.includes(i)
                ? '  S-1 available'
                : matchedArrays[0]?.includes(i) && matchedArrays[1]?.includes(i)
                ? '  booked'
                : ''
            }`;
            return (
              <Picker.Item
                label={labelWithExtraText}
                value={item.value}
                key={i}
                color="white"
                id={item.id}
              />
            );
          })}
        </Picker>
      </View>

      <View>
        <TouchableOpacity
          className="bg-[#5151C0]  flex items-center mx-3.5 py-4 rounded-lg mt-2 mb-1"
          onPress={handleClick}>
          <Text className="font-bold text-white ">Book Now</Text>
        </TouchableOpacity>
      </View>

      <IndividualShopServices />

      <IndividualShopCrew />

      <View className="px-4 pt-4 h-full">
        <Text className="text-black text-2xl font-bold  pb-1">
          Customer Reviews
        </Text>
        {/* <View style={{minHeight: 50}}>
          {shop?.reviews?.length > 0 ? (
            <FlashList
              data={shop?.reviews}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({item}) => {
                return <ReviewCard item={item} />;
              }}
              contentContainerStyle={{
                paddingHorizontal: 1,
                paddingBottom: 20,
              }}
              estimatedItemSize={200}
              shouldRasterizeIOS={true}
              renderToHardwareTextureAndroid={true}
              removeClippedSubviews
            />
          ) : (
            <Text className="text-black  px-1 font-bold">No reviews</Text>
          )}
        </View> */}
      </View>
    </ScrollView>
  );
};

export default memo(IndividualShopScreen);
