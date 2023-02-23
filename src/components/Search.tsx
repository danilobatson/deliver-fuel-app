import { TextInput, View, StyleSheet } from 'react-native';
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';


const Search = () => {

  return (
      <View style={styles.searchContainer}>
        <View style={styles.searchView}>
          <MagnifyingGlassIcon
            style={styles.searchIcon}
            color={'gray'}
            size={20}
          />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB' style={styles.adjustIcon} />
      </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: 5,
    padding: 3,
    flex: 1,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  adjustIcon: {
    paddingBottom: 5,
    marginHorizontal: 10,
  },
});

export default Search;
