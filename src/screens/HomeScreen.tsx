import { SafeAreaView, StyleSheet } from 'react-native';

import { Search } from '../components';
import { Props } from '../types';

const HomeScreen = ({ route, navigation }: Props) => {
  //const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Search />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
});

export default HomeScreen;
