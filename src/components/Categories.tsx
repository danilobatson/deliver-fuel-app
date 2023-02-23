import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {

    const img =
      'https://links.papareact.com/gn7';
  
    const categoryCardProps = {
        imgUrl: img,
        title: 'Testing'
    };
    
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <CategoryCard {...categoryCardProps} />
        <CategoryCard {...categoryCardProps} />
        <CategoryCard {...categoryCardProps} />
        <CategoryCard {...categoryCardProps} />
        <CategoryCard {...categoryCardProps} />
        <CategoryCard {...categoryCardProps} />
        <CategoryCard {...categoryCardProps} />
        <CategoryCard {...categoryCardProps} />
        <CategoryCard {...categoryCardProps} />
 
      </ScrollView>
    );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
