import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Must be type alias, not interface. Doing so will result in incorrect type checking where it allows you to pass incorrect route names.
export type RootStackParamList = {
  Home: undefined;
  Restaurant: {
    name: string;
    image_url: string;
    rating: number;
    price: string;
    location: {
      address1: string;
      city: string;
      state: string;
      zip_code: string;
    };
    data: any;
  };
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type RestaurantScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Restaurant'
>;
export type RestaurantScreenNavigation = RestaurantScreenProps['navigation'];
