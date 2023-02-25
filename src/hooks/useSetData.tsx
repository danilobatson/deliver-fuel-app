import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

const useSetData = () => {
  const [data, setData]: object[] = useState([
    {
      laData: null,
      sdData: null,
      ocData: null,
    },
  ]);

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
        setData((prevState) => ({
          ...prevState,
          sdData: response.data,
        }));
        break;
      case 'Los Angeles, CA':
        setData((prevState) => ({
          ...prevState,
          laData: response.data,
        }));
        break;
      case 'Orange County, CA':
        setData((prevState) => ({
          ...prevState,
          ocData: response.data,
        }));
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

  return { data };
};

export default useSetData;
