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
      toogleLoading(true);
      const response = await api.get<Scheduling[]>('/scheduling');
      setRows(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      toogleLoading(false);
    }
  };
  return { rows, getAll };
}
