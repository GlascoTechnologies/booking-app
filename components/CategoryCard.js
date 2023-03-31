import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';

const CategoryCard = ({imgUrl, title, id}) => {
  return (
    <TouchableOpacity className=" mr-2 h-full space-y-1">
      {/* <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded "></Image> */}
      <FastImage
        source={{
          uri: imgUrl,
          cache: FastImage.cacheControl.immutable,
          priority: FastImage.priority.normal,
        }}
        className="h-14 w-24 rounded "
        resizeMode={FastImage.resizeMode.cover}
      />

      <Text className=" text-gray-700 font-bold text-xs ">{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(CategoryCard);
