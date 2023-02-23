import { Text, SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { styled } from 'nativewind';

import { useNavigation } from '@react-navigation/native';
import { Props } from '../types';

const StyledText = styled(Text, 'text-2xl text-red-600 dark:text-white');
const StyledSafeAreaView = styled(SafeAreaView);

const HomeScreen = ({ route, navigation }: Props) => {
  //const navigation = useNavigation();

  return (
    <StyledSafeAreaView>
      <StyledText>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
          />
        </View>
      </StyledText>
    </StyledSafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: 'grey',
  },
});

export default HomeScreen;
