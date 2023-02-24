import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { cardDetailsProps } from '../types';

const CardDetails = ({ rating, price }: cardDetailsProps) => {
  return (
    <View style={styles.iconContainer}>
      <StarIcon color='green' opacity={0.5} size={22} />
      <Text>
        <Text style={styles.rating}>{rating} • </Text>
        {price}
      </Text>
    </View>
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
});
