import { useContext, useEffect } from 'react';
import { Scheduling } from '../../types/scheduling';
import api from '../../services/api';
import { GlobalContext } from '../../contexts/GlobalContext';
import useLoading from '../useLoading';

export default function useGetList() {
  const { rows, setRows } = useContext(GlobalContext);
  const { loading, toogleLoading } = useLoading();

  const getAll = async () => {
    try {
    //   toogleLoading();
      const response = await api.get<Scheduling[]>('/scheduling');
      console.log('req getAll executed');
      setRows(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      toogleLoading(false);
      console.log('fim getAll');
    }
  };

  useEffect(() => {
    getAll(); // ← agora a função é realmente executada
  }, []);

  return { rows, getAll };
}
