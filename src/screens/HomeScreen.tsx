import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { Search, Categories, FeaturedRow } from '../components';
import { Props } from '../types';
import { useEffect, useState } from 'react';

const HomeScreen = ({ route, navigation }: Props) => {
  //const navigation = useNavigation();
  const [laData, setLAData] = useState([]);
  const [sdData, setSDData] = useState([]);
  const [ocData, setOCData] = useState([]);

  const getOCData = () => {
    axios
      .get('http://localhost:3001/fuel', {
        params: { city: 'Orange County, CA' },
      })
      .then((response) => {
        setOCData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getLAData = () => {
    axios
      .get('http://localhost:3001/fuel', {
        params: { city: 'Los Angeles, CA' },
      })
      .then((response) => {
        setLAData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getSDData = () => {
    axios
      .get('http://localhost:3001/fuel', { params: { city: 'San Diego, CA' } })
      .then((response) => {
        setSDData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getData = () => {
    getOCData();
    getLAData();
    getSDData();
  };

  useEffect(() => {
    getData();
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
