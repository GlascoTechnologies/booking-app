import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ChatBubbleBottomCenterIcon} from 'react-native-heroicons/outline';
import {Rating} from 'react-native-ratings';

function ReviewCard(props) {
  const {item} = props;

  return (
    <Pressable style={[styles.container]}>
      <View className="flex-row items-center space-x-1  ml-1 ">
        <View>
          <Rating
            ratingCount={5}
            readonly
            type="custom"
            imageSize={17}
            ratingColor="green"
            style={{paddingVertical: 10}}
          />
        </View>
        <Text
          className={`text-xs text-gray-500 font-semibold w-[150px]`}
          numberOfLines={1}>
          &nbsp;{item?.name} &nbsp;| &nbsp;{item?.createdAt}
        </Text>
      </View>
      <View className="flex-row items-center space-x-1 ml-1 justify-center pb-3">
        <ChatBubbleBottomCenterIcon color="green" opacity={0.4} size={20} />

        <Text className={`text-xs text-gray-500 w-11/12 `}>
          {item?.comment}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    elevation: 2,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 5,
    padding: 5,
    width: '100%',
  },
  paragraph: {
    marginTop: 6,
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#00CCBB',
  },
  logo: {
    height: '70%',
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default ReviewCard;
