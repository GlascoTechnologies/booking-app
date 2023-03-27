import React from 'react';
import {
  ArrowRightCircleIcon,
  MapPinIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function Card(props) {
  const {uri, title, style} = props;
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.logo} source={{uri: uri}} />

      <Text style={styles.paragraph}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

    backgroundColor: 'green',
  },
  paragraph: {
    marginTop: 3,
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
  },
  logo: {
    height: '75%',
    borderRadius: 5,
    width: '90%',

    resizeMode: 'cover',
  },
});
