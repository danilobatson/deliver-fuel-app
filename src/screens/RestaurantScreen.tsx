import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { Search, Categories, FeaturedRow } from '../components';
import { RestaurantScreenProps } from '@/types';
import useSetData from '../hooks/useSetData';


function RestaurantScreen({ route, navigation }: RestaurantScreenProps) {
  //const navigation = useNavigation();

  const { data } = useSetData();

  const { laData, sdData, ocData }: any = data;

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
              title='Orange County'
              description='Better than the OC Fair!'
              featuredCategory='Orange County Restaurants'
              data={ocData}
            />

            <FeaturedRow
              id='1234'
              title='Los Angeles'
              description='Too much traffic? Let us come to you'
              featuredCategory='Los Angeles Restaurants'
              data={laData}
            />
            <FeaturedRow
              id='1235'
              title='San Diego'
              description='Those waves sure work up an appetite'
              featuredCategory='San Diego Restaurants'
              data={sdData}
            />
          </>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
  flatList: {
    paddingBottom: 20,
  },
});

export default RestaurantScreen;
