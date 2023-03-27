import React, {useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RecyclerListView, DataProvider} from 'recyclerlistview';

import Card from './MainCard';
import {LayoutUtil, ViewTypes} from '../utils/LayoutUtility';
import {ArrowRightIcon} from 'react-native-heroicons/outline';

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
  const {data} = props;

  let dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });
  dataProvider = dataProvider.cloneWithRows(data);

  let layoutProvider = LayoutUtil.getLayoutProvider(dataProvider);
  const rowRenderer = (type, data) => {
    const {uri, title} = data;
    switch (type) {
      case ViewTypes.SUB_ITEM:
        return <Card uri={uri} title={title} style={{marginHorizontal: 5}} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View className={`flex-row px-3 py-1.5`}>
        <View className=" flex-1  ">
          <Text className="text-black text-xl font-bold">
            {allRowHeaders[1]?.title}
          </Text>
          <Text className="text-gray-500">{allRowHeaders[1]?.desc}</Text>
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
