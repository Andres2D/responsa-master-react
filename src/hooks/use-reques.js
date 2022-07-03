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
      const query = `${API_URL}amount=${amount}&category=${category}&difficulty=easy&type=multiple`
      const response = await axios.get(query);

      if(response.status !== 200) {
        throw new Error();
      }
      
      const questions = response.data.results;
      applyResponse(questions);
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
