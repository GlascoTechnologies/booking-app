import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {RecyclerListView, DataProvider} from 'recyclerlistview';

import {LayoutUtil, ViewTypes} from '../../utils/LayoutUtility';

import ShopCard from '../shop/ShopCard';

function VerticalList(props) {
  const {data} = props;

  let dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });
  dataProvider = dataProvider.cloneWithRows(data);

  let layoutProvider = LayoutUtil.getLayoutProvider(dataProvider);
  const rowRenderer = (type, data) => {
    const {
      photos,
      desc,
      name,
      type: type1,
      rating,
      address,
      city,
      cheapestPrice,
      _id: id,
    } = data;

    switch (type) {
      case ViewTypes.SHOP_CARD:
        return (
          <ShopCard
            uri={photos[0]}
            title={name}
            desc={desc}
            address={address}
            rating={rating}
            city={city}
            rate={cheapestPrice}
            shopId={id}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {data && (
        <RecyclerListView
          layoutProvider={layoutProvider}
          dataProvider={dataProvider}
          rowRenderer={rowRenderer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginHorizontal: 15,
    marginTop: 7,
  },
});

export default React.memo(VerticalList);
