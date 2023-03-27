import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  CheckBadgeIcon,
  MapPinIcon,
  StarIcon,
} from 'react-native-heroicons/outline';

function FastImageView(props) {
  const {uri} = props;
  return (
    <FastImage
      source={{
        uri: uri,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.immutable,
      }}
      resizeMode={FastImage.resizeMode.cover}
      className="h-44 w-full "
      style={{
        borderTopLeftRadius: 15,
        borderTopRightRadius: 8,
      }}
    />
  );
}

const MemoizedFastImageView = React.memo(FastImageView);
function ShopCard(props) {
  const {title, desc, rating, address, city, rate, shopId, uri} = props;

  const navigation = useNavigation();

  const handleScreen = () => {
    navigation.navigate('IndividualShop', {
      id: shopId,
    });
  };
  const memoizedFastImage = React.useMemo(() => {
    return (
      <MemoizedFastImageView
        uri={
          'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp'
        }
      />
    );
  }, [uri]);

  return (
    <>
      <Pressable
        onPress={handleScreen}
        style={{elevation: 3}}
        className="bg-white rounded-lg mt-2 relative ">
        {memoizedFastImage}
        <View className="absolute bottom-10 left-3 flex-row">
          <View className="flex-1 ">
            <View className="flex-row items-center">
              <Text className=" text-white  font-extrabold text-2xl">
                {title}{' '}
              </Text>
              <CheckBadgeIcon color="#00CCBB" size={25} />
            </View>

            <Text className="text-white font-bold ">{desc}</Text>
          </View>
        </View>
        <View className="bg-green-500 absolute px-1.5 py-0.5 space-x-1  flex items-center flex-row rounded-md ">
          <StarIcon color="white" size={15} />
          <Text className="text-white font-bold">{rating}</Text>
        </View>

        <View className="flex-row items-center">
          <View className="flex-row flex-1 items-center">
            <MapPinIcon color="black" size={20} />
            <Text className="text-black my-2 font-semibold text-xs">
              {address?.replace(`,${city}`, '')}
            </Text>
          </View>
          <Text className="text-black font-bold mr-2">Basic Rs.{rate}</Text>
        </View>
      </Pressable>
    </>
  );
}

export default ShopCard;
