import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ArrowLeftIcon,
  MagnifyingGlassCircleIcon,
} from 'react-native-heroicons/outline';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FlatList} from 'react-native';

const SearchScreen = () => {
  const navigation = useNavigation();
  const {
    params: {colonies, city},
  } = useRoute();

  const renderItem = ({item}: String) => {
    return (
      <>
        <TouchableOpacity
          style={{elevation: 6}}
          onPress={() =>
            navigation.navigate('Shop', {selectedColony: item, city: city})
          }
          className={`bg-white px-3 py-4 m-1 flex items-center justify-center   rounded-lg`}>
          <Text className="text-black font-semibold">{item}</Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row items-center space-x-3 px-5 pt-3 ">
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <ArrowLeftIcon size={25} color="#00CCBB" />
        </TouchableOpacity>
        <Text className="text-black text-xl font-bold">shadnagar saloons</Text>
      </View>
      <View className="flex-row items-center  pb-3.5   pt-4  mx-5  ">
        <TouchableOpacity className=" flex-row flex-1  h-10 bg-white items-center rounded-full border border-[#00ccbb]">
          <Text className="ml-2">
            <MagnifyingGlassCircleIcon color="#00CCBB" size={25} />
          </Text>
          <Text className="text-gray-400">Search your colony ...</Text>
        </TouchableOpacity>
      </View>
      {
        <FlatList
          data={colonies}
          keyExtractor={(item, i) => i.toString()}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingVertical: 15,
          }}
          style={{
            flexGrow: 0,
          }}
        />
      }
    </SafeAreaView>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
