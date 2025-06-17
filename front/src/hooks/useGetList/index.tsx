import { useEffect, useState } from 'react';
import { Scheduling } from '../../types/scheduling';
import api from '../../services/api';
export default function useGetList() {
    const [ rows, setRows ] = useState<Scheduling[]>([]);

    const getAll = () => {
        api.get('/scheduling')
        .then(response =>{
            console.log('req getAll executed');
            setRows(response.data);
            
        })
        .catch(error => console.error(error));
    }
    useEffect(() => {
        getAll();
    }, []);

    return { rows, getAll };
}
