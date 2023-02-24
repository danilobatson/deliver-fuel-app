import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { restaurantCardProps } from '../types';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

import CardDetails from './CardDetails';

const RestaurantCard = ({
  name,
  image_url,
  rating,
  price,
  location,
}: restaurantCardProps) => {
  const { address1, city, state, zip_code } = location;
  return (
    <TouchableOpacity style={styles.touchable}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{name}</Text>
        <CardDetails rating={rating} price={price} />

        <View style={styles.locale}>
          <MapPinIcon color='gray' opacity={0.4} size={22} />
          <Text style={styles.address}>
            Nearby • {address1}, {city}, {state} {zip_code}
          </Text>
        </View>
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
  address: {
    marginLeft: 5,
    fontSize: 12,
    color: 'gray',
  },
  locale: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  touchable: {
    marginRight: 10,
    backgroundColor: 'white',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
  },
});
