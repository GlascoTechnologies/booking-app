import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
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
import useFetch from '../utils/useFetch';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';
const IndividualShopScreen = ({route}) => {
  const shopId = React.useMemo(() => route?.params?.id, []);

  const {data, loading} = useFetch(
    `https://booking-dynamic-test.onrender.com/api/hotels/find/${shopId}`,
  );

  // const fetchReviews = async () => {
  //   return await axios
  //     .get(`/api/hotels/getReviews/${id}`)
  //     .then((res) => {
  //       // console.log("reviewsfromdb", res.data);
  //       setReviews(res.data);
  //     })
  //     .catch((err) => toast.error(err));
  // };
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  return loading ? (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <ScrollView className="bg-white">
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
        />

        <View className="px-3 mt-3 mb-3">
          <Text className="text-black font-bold text-2xl">{data?.name}</Text>
          <View className="flex-row mt-1 ">
            <MapPinIcon size={17} color="#00CCBB" />
            <Text className="text-gray-600 pl-0.5 text-xs">
              {data?.address}
            </Text>
            <Text className="text-gray-600 pl-0.5 text-xs">
              -- {data?.distance} m from center
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-1 items-center">
          <View className="bg-green-500 px-5 space-x-1 py-1 flex items-center justify-center flex-row rounded-md w-14 ml-4  mr-1">
            <StarIcon color="white" size={20} />
            <Text className="text-white font-bold">{data?.rating}</Text>
          </View>
          <Text className="text-[#00ccbb]">
            See all {data?.numReviews} reviews
          </Text>
        </View>
        <Text className="text-black px-4 pt-3 ">{data?.desc}</Text>

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

      <View className=" h-auto mx-3.5 my-2 rounded-lg bg-[#00ccbb]">
        <Picker
          selectedValue={selectedTime}
          needsOffscreenAlphaCompositing={true}
          onValueChange={itemValue => setSelectedTime(itemValue)}>
          <Picker.Item label="Select Time" value="" />
          {time.map((item, i) => {
            return (
              <Picker.Item label={item.value} value={item.value} key={i} />
            );
          })}
        </Picker>
      </View>
      <View>
        <TouchableOpacity className="bg-[#5151C0]  flex items-center mx-3.5 py-4 rounded-lg mt-2 mb-1">
          <Text className="font-bold text-white ">Book Now</Text>
        </TouchableOpacity>
      </View>

      <IndividualShopServices />

      <IndividualShopServices />
      <IndividualShopCrew />

      <View className="px-5 pt-4 pb-5">
        <Text className="text-black text-2xl font-bold">Customer Reviews</Text>
        {data?.reviews?.map((item, i) => {
          return <ReviewCard key={i} item={item} />;
        })}
      </View>
    </ScrollView>
  );
};

export default React.memo(IndividualShopScreen);
