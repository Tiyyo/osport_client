import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axiosInstance';

const useFetch = (url: string): { loading: boolean, data: any, error:string } => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
          setLoading(true);

          try {
            const res = await axiosInstance.get(url);
            setData(res.data.data);
            setLoading(false);
          } catch (err) {
            console.log(err);
            setLoading(false);
          }
        };
          fetchdata();
      }, [url]);

   return { loading, data, error };
};

export default useFetch;
