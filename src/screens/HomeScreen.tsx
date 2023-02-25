import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Search, Categories, FeaturedRow } from '@/components/';
import { Props } from '@/types';
import { useEffect, useState } from 'react';

const HomeScreen = ({ route, navigation }: Props) => {
  //const navigation = useNavigation();
  const [laData, setLAData] = useState([]);
  const [sdData, setSDData] = useState([]);
  const [ocData, setOCData] = useState([]);

  const getCityData = async (city: string) => {
    await axios
      .get('http://localhost:3001/fuel', { params: { city } })
      .then((response: AxiosResponse) => {
        caseCity(city, response);
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });
  };

  const caseCity = (city: string, response: AxiosResponse) => {
    switch (city) {
      case 'San Diego, CA':
        setSDData(response.data);
        break;
      case 'Los Angeles, CA':
        setLAData(response.data);
        break;
      case 'Orange County, CA':
        setOCData(response.data);
        break;
      default:
        break;
    }
  };

  const getData = async () => {
    await getCityData('San Diego, CA');
    await getCityData('Los Angeles, CA');
    await getCityData('Orange County, CA');
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
