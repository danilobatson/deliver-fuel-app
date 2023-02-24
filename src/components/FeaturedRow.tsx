import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { featuredRowProps } from '../types';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({
  title,
  description,
  featuredCategory,
}: featuredRowProps) => {
  const restaurantCardProps = {
    id: 1,
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/59c46119f9a61e33274471cd/1506446138647-9ERHWFT1LCNJ6K80ICQB/IMG_4518.JPG?format=2500w',
    title: 'Arc',
    rating: 4.5,
    genre: 'American Fusion',
    address: '123 Main St, Costa Mesa, CA',
    short_description: 'Short description',
    dishes: ['duck taco', 'cornbread', 'meatball pizza'],
    long: 123,
    lat: 123,
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <ArrowRightIcon style={styles.arrow} />
      </View>

      <Text style={styles.description}>{description}</Text>
      <FlatList
        style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1]}
        renderItem={() => (
          // Restaurant cards
          <>
            <RestaurantCard {...restaurantCardProps} />
            <RestaurantCard {...restaurantCardProps} />
            <RestaurantCard {...restaurantCardProps} />
            <RestaurantCard {...restaurantCardProps} />
          </>
        )}
      />
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    marginLeft: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    paddingHorizontal: 5,
    color: 'grey',
    marginLeft: 10,
  },
  flatList: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  arrow: {
    marginRight: 10,
    color: '#00CCBB',
  },
});
