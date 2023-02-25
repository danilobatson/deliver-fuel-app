import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { CategoryCard } from './';
import data from '../../assets';

const Categories = () => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryCard image={item.image} title={item.title} />
      )}
      horizontal
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
