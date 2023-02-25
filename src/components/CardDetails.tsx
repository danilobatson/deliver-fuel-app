import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

import { cardDetailsProps } from '@/types';

const CardDetails = ({ rating, price, location }: cardDetailsProps) => {
  const { address1, city, state, zip_code } = location;

  return (
    <>
      <View style={styles.iconContainer}>
        <StarIcon color='green' opacity={0.5} size={22} />
        <Text>
          <Text style={styles.rating}>{rating} • </Text>
          {price}
        </Text>
      </View>
      <View style={styles.locale}>
        <MapPinIcon color='gray' opacity={0.4} size={22} />
        <Text style={styles.address}>
          Nearby • {address1}, {city}, {state} {zip_code}
        </Text>
      </View>
    </>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  rating: {
    color: 'green',
  },
  locale: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  address: {
    marginLeft: 5,
    fontSize: 12,
    color: 'gray',
  },
});
