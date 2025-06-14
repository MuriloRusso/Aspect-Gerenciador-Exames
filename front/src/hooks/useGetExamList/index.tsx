import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Exam } from '../../types/exam';
export default function useGetExamList() {
    const [ rows, setRows ] = useState<Exam[]>([]);
    useEffect(() => {
    api.get('/exam')
        .then(response =>setRows(response.data))
        .catch(error => console.error(error));
    }, []);

    return { rows };
}
