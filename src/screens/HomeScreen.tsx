import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

import { Search, Categories } from '../components';
import { Props } from '../types';

const HomeScreen = ({ route, navigation }: Props) => {
  //const navigation = useNavigation();

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
    backgroundColor: '#d2d1d5',
    paddingBottom: 20,
  },
});

export default HomeScreen;
