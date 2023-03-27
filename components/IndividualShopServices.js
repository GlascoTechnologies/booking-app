import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
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

  const MemoizedFastImageView = FastImageView;
  return (
    <View className="pt-2">
      <Text className="text-black font-bold text-2xl px-3.5">Services</Text>
      <ScrollView
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
            Hair Saloonsssssssssssssssssssssssssssssss
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

export default IndividualShopServices;
