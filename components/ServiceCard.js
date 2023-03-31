import React from 'react';
import {
  ArrowRightCircleIcon,
  MapPinIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function ServiceCard(props) {
  const {uri, title, style} = props;
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://res.cloudinary.com/duk9xkcp5/image/upload/v1679760875/Hair_cutting_in_salon_illustration_vector_concept_generated_1_ywx6vs_1_c4hpsc.webp',
        }}
      />

      <Text style={styles.paragraph} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    backgroundColor: '',
  },
  paragraph: {
    marginTop: 3,
    fontSize: 12,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 120,
    paddingLeft: 2,
  },
  logo: {
    height: '75%',
    borderRadius: 5,
    width: '100%',

    resizeMode: 'cover',
  },
});
