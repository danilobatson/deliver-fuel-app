import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { featuredRowProps } from '@/types';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { RestaurantCard } from '@/components';

const FeaturedRow = ({ title, description, data }: featuredRowProps) => {
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
        data={data}
        //May come back undefined
        // @ts-ignore
        renderItem={({ item }: any) => (
          <>
            <RestaurantCard
              name={item.name}
              image_url={item.image_url}
              rating={item.rating}
              price={item.price}
              location={item.location}
            />
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
