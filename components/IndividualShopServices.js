import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {memo, useMemo} from 'react';
import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
const IndividualShopServices = () => {
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
  const MemoizedFastImageView = useMemo(() => FastImageView, []);

  const renderItem = () => {
    return (
      <TouchableOpacity
        style={[styles.container, {marginHorizontal: 5, width: 150}]}>
        <MemoizedFastImageView
          uri={
            'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
          }
          style={styles.logo}
        />

        <Text style={styles.paragraph} numberOfLines={1}>
          Hair Saloons
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="pt-2">
      <Text className="text-black font-bold text-2xl px-4">Services</Text>
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 9,

          height: 120,
        }}>
        <TouchableOpacity
          style={[styles.container, {marginHorizontal: 5, width: 150}]}>
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            style={styles.logo}
          />

          <Text style={styles.paragraph} numberOfLines={1}>
            Hair Saloons
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.container, {marginHorizontal: 5, width: 150}]}>
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            style={styles.logo}
          />

          <Text style={styles.paragraph}>Hair Cut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.container, {marginHorizontal: 5, width: 150}]}>
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            style={styles.logo}
          />

          <Text style={styles.paragraph}>Shaving</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.container, {marginHorizontal: 5, width: 150}]}>
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            style={styles.logo}
          />

          <Text style={styles.paragraph}>Bleaching</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.container, {marginHorizontal: 5, width: 150}]}>
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            style={styles.logo}
          />

          <Text style={styles.paragraph}>Hair Saloon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.container, {marginHorizontal: 5, width: 150}]}>
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            style={styles.logo}
          />

          <Text style={styles.paragraph}>Hair Saloon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.container, {marginHorizontal: 5, width: 150}]}>
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            style={styles.logo}
          />

          <Text style={styles.paragraph}>Hair Saloon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.container, {marginHorizontal: 5, width: 150}]}>
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            style={styles.logo}
          />

          <Text style={styles.paragraph}>Hair Saloon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.container, {marginHorizontal: 5, width: 150}]}>
          <MemoizedFastImageView
            uri={
              'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
            }
            style={styles.logo}
          />

          <Text style={styles.paragraph}>Hair Saloon</Text>
        </TouchableOpacity>
      </ScrollView> */}
      <View style={{height: 120}}>
        <FlashList
          data={data}
          keyExtractor={(item, i) => i.toString()}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          estimatedItemSize={200}
          horizontal={true}
          shouldRasterizeIOS={true}
          renderToHardwareTextureAndroid={true}
          removeClippedSubviews
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 5,
    marginTop: 5,
  },
  paragraph: {
    marginTop: 2,
    fontSize: 13,
    width: '90%',
    fontWeight: 'bold',
    color: '#00CCBB',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
  logo: {
    height: '80%',
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default memo(IndividualShopServices);
