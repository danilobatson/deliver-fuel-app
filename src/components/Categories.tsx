import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { CategoryCard } from './';

const Categories = () => {
  const img =
    'https://images.squarespace-cdn.com/content/v1/59c46119f9a61e33274471cd/1506446247654-N8VE2V7V3VPNH6LO39K8/Arc+Burger+with+Cocktail.jpg?format=2500w';

  const data = new Array(10).fill(1);

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={() => <CategoryCard imgUrl={img} title='Category' />}
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
