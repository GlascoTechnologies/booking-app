import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {RecyclerListView, DataProvider} from 'recyclerlistview';

import {LayoutUtil, ViewTypes} from '../../utils/LayoutUtility1';

import ShopCard from './ShopCard';

function VerticalList(props) {
  const {data, index} = props;

  let dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });
  dataProvider = dataProvider.cloneWithRows(data);

  let layoutProvider = LayoutUtil.getLayoutProvider(dataProvider);
  const rowRenderer = (type, data) => {
    const {name, rating, address, cheapestPrice, _id, desc, photos} = data;

    switch (type) {
      case ViewTypes.SUB_ITEM:
        return (
          <ShopCard
            index={index}
            uri={photos[0]}
            title={name}
            shopId={_id}
            rating={rating}
            price={cheapestPrice}
            address={address}
            desc={desc}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <RecyclerListView
        layoutProvider={layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
        isHorizontal={false}
        showsVerticalScrollIndicator={false}
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
    paddingHorizontal: 10,
  },
});

export default memo(VerticalList);
