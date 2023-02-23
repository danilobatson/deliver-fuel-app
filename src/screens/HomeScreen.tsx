import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { Search, Categories } from '../components';
import { Props } from '../types';

const HomeScreen = ({ route, navigation }: Props) => {
  //const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Search />
      <ScrollView style={styles.scroll}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
  scroll: {
    backgroundColor: '#d2d1d5',
    paddingBottom: 20,
  },
});

export default HomeScreen;
