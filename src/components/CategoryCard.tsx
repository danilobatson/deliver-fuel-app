import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

import { categoryCardProps } from '@/types';

const CategoryCard = ({ imgUrl, title }: categoryCardProps) => {
  return (
    <TouchableOpacity style={styles.touch}>
      <Image
        style={styles.img}
        source={{
          uri: imgUrl,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  touch: {
    marginRight: 5,
    position: 'relative',
  },
  title: {
    position: 'absolute',
    paddingBottom: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CategoryCard;
