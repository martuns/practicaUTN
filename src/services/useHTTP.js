import { useState, useEffect } from "react";
const axios = require("axios");
const BASE_URL = "https://rickandmortyapi.com/api";
const useGet = ({
  url, initialState =[], initialSingle = {
    'id': '1',
    'name': 'ejemplo',
    'status': '',
    'image': '',
    'location': '',
    'origin': '',
    'species' : '',
   
} }) => {
  const [data, setData] = useState(initialState);
  const [singleData, setSingleData] = useState(initialSingle);
  const [error, setError] = useState(false);
  const [isFetching, setFeching] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        
        const {data} = await axios.get(`${BASE_URL}${url}`);
        
        setSingleData(data)
        setData(data.results);
        
        setFeching(false);
      } catch (e) {
        console.error(e);
        setError(true);
      }
    };
    get();
  }, [url]);
  return [data, singleData, isFetching, error];
};

export default useGet;
