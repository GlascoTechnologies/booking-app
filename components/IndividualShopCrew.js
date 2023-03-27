import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
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

  const MemoizedFastImageView = FastImageView;
  return (
    <View className="pt-2">
      <Text className="text-black font-bold text-2xl px-3.5">Shop Crew</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-2"
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          height: 110,
        }}>
        <View className="h-20 w-20 ">
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            className="h-full w-full rounded-full"
          />

          <Text style={styles.paragraph} numberOfLines={1}>
            Hair Saloons
          </Text>
        </View>
        <View className="h-20 w-20 ">
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            className="h-full w-full rounded-full"
          />

          <Text style={styles.paragraph} numberOfLines={1}>
            Hair Saloons
          </Text>
        </View>
        <View className="h-20 w-20 ">
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            className="h-full w-full rounded-full"
          />

          <Text style={styles.paragraph} numberOfLines={1}>
            Hair Saloons
          </Text>
        </View>
        <View className="h-20 w-20 ">
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            className="h-full w-full rounded-full"
          />

          <Text style={styles.paragraph} numberOfLines={1}>
            Hair Saloons
          </Text>
        </View>
        <View className="h-20 w-20 ">
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            className="h-full w-full rounded-full"
          />

          <Text style={styles.paragraph} numberOfLines={1}>
            Hair Saloons
          </Text>
        </View>
        <View className="h-20 w-20 ">
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            className="h-full w-full rounded-full"
          />

          <Text style={styles.paragraph} numberOfLines={1}>
            Hair Saloons
          </Text>
        </View>
      </ScrollView>
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

export default IndividualShopCrew;
