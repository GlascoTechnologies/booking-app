import React, {useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RecyclerListView, DataProvider} from 'recyclerlistview';

import Card from './MainCard';
import {LayoutUtil, ViewTypes} from '../utils/LayoutUtility';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import ServiceCard from './ServiceCard';

export default function HorizontalRecylerList(props) {
  const allRowHeaders = useMemo(
    () => [
      {
        id: 0,
      },
      {
        id: 1,
        title: 'Services',
        desc: 'Easytym services',
      },
      {
        id: 1,
        title: 'Best Saloons for you',
        desc: 'We picked best saloons for you',
      },
      {id: 2, title: 'Saloons by Area', desc: 'Find saloons by area'},
      {id: 3, title: 'Offers', desc: 'Latest offers for you'},
    ],
    [],
  );
  const {data, index} = props;

  const dataProvider = useMemo(
    () =>
      new DataProvider((r1, r2) => {
        return r1 !== r2;
      }).cloneWithRows(data),
    [],
  );

  const layoutProvider = useMemo(
    () => LayoutUtil.getLayoutProvider(dataProvider),
    [dataProvider],
  );
  const rowRenderer = (type, data) => {
    const {uri, name, title, count, _id} = data;

    switch (type) {
      case ViewTypes.SUB_ITEM:
        return (
          <Card
            index={index}
            uri={
              uri ||
              'https://cdn.wccftech.com/wp-content/uploads/2020/02/49517766152_7ab6037ac1_k.jpg'
            }
            title={name}
            count={count || _id}
            style={{marginHorizontal: 5}}
          />
        );
      case ViewTypes.SUB_ITEM1:
        return (
          <ServiceCard
            index={index}
            uri={uri}
            title={title}
            style={{marginHorizontal: 5}}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View className={`flex-row px-3 py-1.5`}>
        <View className=" flex-1  ">
          <Text className="text-black text-xl font-bold">
            {allRowHeaders[index]?.title}
          </Text>
          <Text className="text-gray-500">{allRowHeaders[index]?.desc}</Text>
        </View>
        <ArrowRightIcon size={22} color="#00ccbb" />
      </View>
      <RecyclerListView
        layoutProvider={layoutProvider}
        contentContainerStyle={{
          paddingHorizontal: 7,
        }}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
        isHorizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 5,
  },
});
