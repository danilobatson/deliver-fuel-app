interface restaurantCardProps {
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
}

export { restaurantCardProps };
