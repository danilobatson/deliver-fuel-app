import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { restaurantCardProps, RestaurantScreenNavigation } from '@/types';
import { CardDetails } from './';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
  name,
  image_url,
  rating,
  price,
  location,
  data,
}: restaurantCardProps) => {
  const navigation = useNavigation<RestaurantScreenNavigation>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Restaurant', {
          name,
          image_url,
          rating,
          price,
          location,
          data,
        })
      }
      style={styles.touchable}
    >
      <Image style={styles.image} source={{ uri: image_url }} />

      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{name}</Text>
        <CardDetails rating={rating} price={price} location={location} />
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 144,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 5,
  },
  descriptionContainer: {
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  touchable: {
    marginRight: 10,
    backgroundColor: 'white',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
  },
});
