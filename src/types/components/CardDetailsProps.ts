interface cardDetailsProps {
  rating: number;
  price: string;
  location: {
    address1: string;
    city: string;
    state: string;
    zip_code: string;
  };
}

export { cardDetailsProps };
