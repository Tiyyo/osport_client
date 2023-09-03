import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axiosInstance';

const useMutation = (
  url: string,
  body: object,
  method: string,
): {
  loading: boolean,
  data: any,
  error: string
} => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!body) return;
    const fetchdata = async () => {
      setLoading(true);

      try {
        if (method === 'POST') {
          const res = await axiosInstance.post(url, body);
          setData(res.data.data);
          setLoading(false);
        }
        if (method === 'PATCH') {
          const res = await axiosInstance.patch(url, body);
          setData(res.data.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };
    fetchdata();
  }, [url, body]);

  return { loading, data, error };
};

export default useMutation;
