import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { Search, Categories, FeaturedRow } from '../components';
import { Props } from '../types';
import { useEffect } from 'react';

const HomeScreen = ({ route, navigation }: Props) => {
  //const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('http://localhost:3001/api')
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Search Bar */}
      <Search />
      {/* Body */}
      <FlatList
        style={styles.flatList}
        data={[1]}
        renderItem={() => (
          <>
            {/* Categories */}
            <Categories />

            {/* Featured Rows */}
            <FeaturedRow
              id='123'
              title='Featured'
              description='Paid placements'
              featuredCategory='featured category'
            />

            <FeaturedRow
              id='1234'
              title='Tasty Discounts'
              description='Everyone has been enjoying these'
              featuredCategory='discounts'
            />
            <FeaturedRow
              id='1235'
              title='Offer Near You'
              description='Why not support your local business'
              featuredCategory='offers'
            />
          </>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
  flatList: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
