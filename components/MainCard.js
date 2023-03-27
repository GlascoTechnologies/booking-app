import React from 'react';
import {BuildingStorefrontIcon} from 'react-native-heroicons/outline';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Card(props) {
  const {uri, title, style, index, count} = props;

  const navigation = useNavigation();
  const handleScreen = () => {
    index == 2 && navigation.navigate('IndividualShop', {id: count});
    index == 3 && navigation.navigate('Shop', {city: title});
  };

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handleScreen}>
      <Image style={[styles.logo]} source={{uri: uri}} />

      <Text className="text-black text-[14px] font-semibold ml-3 my-1">
        {title}
      </Text>
      <View className="flex-row items-center space-x-1 ml-2">
        <BuildingStorefrontIcon size={20} color="#00CCBB" />
        <Text className=" text-xs text-gray-500 font-semibold">
          {index == 3 ? `${count} shops` : '1.5 km away'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    elevation: 2,
    borderRadius: 5,
    backgroundColor: 'white',
  },

  logo: {
    height: '70%',
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'cover',
  },
});
