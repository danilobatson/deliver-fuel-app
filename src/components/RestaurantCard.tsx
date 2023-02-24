import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { restaurantCardProps } from '../types';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapIcon, MapPinIcon } from 'react-native-heroicons/outline';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}: restaurantCardProps) => {
  return (
    <TouchableOpacity style={styles.touchable}>
      <Image style={styles.image} source={{ uri: imgUrl }} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconContainer}>
          <StarIcon color='green' opacity={0.5} size={22} />
          <Text>
            <Text style={styles.rating}>{rating}</Text> • {genre}
          </Text>
        </View>

        <View style={styles.locale}>
          <MapPinIcon color='gray' opacity={0.4} size={22} />
          <Text style={styles.address}>Nearby • {address} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  image: {
    width: 256,
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
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  rating: {
    color: 'green',
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
