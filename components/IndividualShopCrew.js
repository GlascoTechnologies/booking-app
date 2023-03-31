import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {memo, useMemo} from 'react';
import FastImage from 'react-native-fast-image';
import FlashList from '@shopify/flash-list/dist/FlashList';
const IndividualShopCrew = () => {
  function FastImageView(props) {
    const {uri, style} = props;
    return (
      <FastImage
        source={{
          uri: uri,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={style}
      />
    );
  }

  const MemoizedFastImageView = useMemo(() => FastImageView, []);

  const data = [
    {
      title: 'Hair Cut',
      image:
        'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp',
    },
    {
      title: 'Shaving',
      image:
        'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp',
    },
    {
      title: 'Bleaching',
      image:
        'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp',
    },
    {
      title: 'Nailing',
      image:
        'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp',
    },
    {
      title: 'Curling',
      image:
        'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View className="h-20 w-20 px-1 py-1">
        <MemoizedFastImageView
          uri={
            'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
          }
          className="h-full w-full rounded-full "
        />
      </View>
    );
  };

  return (
    <View className="pt-2">
      <Text className="text-black font-bold text-2xl px-4">Shop Crew</Text>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, i) => i.toString()}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 5,
        }}
        estimatedItemSize={200}
        horizontal={true}
        shouldRasterizeIOS={true}
        renderToHardwareTextureAndroid={true}
        removeClippedSubviews
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,

    backgroundColor: 'white',
    marginBottom: 5,
  },
  paragraph: {
    marginTop: 5,
    fontSize: 13,
    width: '100%',
    fontWeight: 'bold',
    color: '#00CCBB',
    textAlign: 'center',
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

export default memo(IndividualShopCrew);
