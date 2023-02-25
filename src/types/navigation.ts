import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Must be type alias, not interface. Doing so will result in incorrect type checking where it allows you to pass incorrect route names.
export type RootStackParamList = {
  Home: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
