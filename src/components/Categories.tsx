import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const img = 'https://links.papareact.com/gn7';

  const categoryCardProps = {
    imgUrl: img,
    title: 'Testing',
  };

  const data = new Array(10).fill(1);

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={() => <CategoryCard {...categoryCardProps} />}
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
