import { useEffect, useState } from 'react';
import { Scheduling } from '../../types/scheduling';
import api from '../../services/api';
export default function useGetList() {
    const [ rows, setRows ] = useState<Scheduling[]>([]);
    useEffect(() => {
    api.get('/scheduling')
        .then(response =>setRows(response.data))
        .catch(error => console.error(error));
    }, []);

    return { rows };
}
