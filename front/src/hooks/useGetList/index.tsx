import { useContext, useEffect, useState } from 'react';
import { Scheduling } from '../../types/scheduling';
import api from '../../services/api';
import { GlobalContext } from '../../contexts/GlobalContext';
export default function useGetList() {

    const { rows, setRows } = useContext(GlobalContext);

    const getAll = () => {
        api.get('/scheduling')
        .then(response =>{
            console.log('req getAll executed');
            setRows(response.data);
            
        })
        .catch(error => console.error(error));
    }

    useEffect(() => {
        console.log('use effect');
        getAll();
    }, []);

    useEffect(() => {
        console.log('rows');
        console.log(rows);
        
    }, [rows]);


    return { rows, getAll };
}
