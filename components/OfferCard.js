import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

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

function OfferCard(props) {
  const {uri, title, style} = props;

  return (
    <View style={[styles.container, style]}>
      <MemoizedFastImageView uri={uri} style={styles.logo} />

      <Text style={styles.paragraph}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  paragraph: {
    marginTop: 8,
    fontSize: 14,

    fontWeight: 'bold',
    color: '#00CCBB',
  },
  logo: {
    height: '75%',
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default OfferCard;
