import axios from "axios";
import { useCallback, useState } from 'react';

const API_URL = 'https://opentdb.com/api.php?';

const useRequest = () => {

  const [isLoading, setIslLoading] = useState(false);  
  const [error, setError] = useState(null);  

  const sendRequest = useCallback(async (queryParams, applyResponse) => {
    try {
      setError(null);
      setIslLoading(true);

      const { amount, category } = queryParams;
      const query = `${API_URL}amount=${amount}&category=${category}&difficulty=easy&type=boolean`
      const response = await axios.get(query);
      console.log(response);
      applyResponse(response);
    }catch(err) {
      setError(err);
    }
    setIslLoading(false);
  }, []);

  return {
    isLoading,
    sendRequest,
    error
  }
};

export default useRequest;
