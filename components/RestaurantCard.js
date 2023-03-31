import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import React, {memo} from 'react';
import {
  BuildingStorefrontIcon,
  MapPinIcon,
  StarIcon,
} from 'react-native-heroicons/outline';

import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,

  count,
  index,
}) => {
  const navigation = useNavigation();

  const handleScreen = () => {
    index == 1 && navigation.navigate('IndividualShop', {id});
    index == 2 && navigation.navigate('Shop', {city: title});
  };

  return (
    <Pressable
      className="bg-white mr-2 rounded"
      onPress={handleScreen}
      style={{elevation: 3}}>
      {/* <Image
        source={{ uri: imgUrl && urlFor(imgUrl).url() }}
        className="h-36 w-60 rounded-sm"
      /> */}
      <FastImage
        source={{
          uri: imgUrl,
          cache: FastImage.cacheControl.immutable,
          priority: FastImage.priority.normal,
        }}
        className="h-36 w-60 rounded"
        resizeMode={FastImage.resizeMode.cover}
      />

      <View className="px-3 pb-2">
        <Text className=" text-black font-bold text-lg pt-2">{title}</Text>
        {index == 1 ? (
          <>
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">
                  {Math.round(rating)} &nbsp;from {count} reviews
                </Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500 w-48" numberOfLines={1}>
                {address}
              </Text>
            </View>
          </>
        ) : (
          <>
            <View className="flex-row items-center space-x-1">
              <BuildingStorefrontIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{count} shops</Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500 w-48" numberOfLines={1}>
                Find your fav saloon
              </Text>
            </View>
          </>
        )}
      </View>
    </Pressable>
  );
};

export default memo(RestaurantCard);
