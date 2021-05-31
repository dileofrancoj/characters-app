import { useState, useEffect, useCallback } from "react";

import API from "../API";
import { AxiosResponse } from "axios";

const useFetch = (endpoint: string): [any, boolean] => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const fetchData = useCallback(async () => {
    try {
      const { data: responseData }: AxiosResponse = await API.get(
        `/${endpoint}`
      );
      setLoading(false);
      setData(responseData);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, loading];
};

export default useFetch;
