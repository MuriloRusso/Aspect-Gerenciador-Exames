import useFields from "../useFields";
import api from '../../services/api';
import { setHours, setMinutes, setSeconds } from 'date-fns';
import useModals from "../useModals";
import useGetList from "../useGetList";

export default function useCreate() {
  const { schedulingData } = useFields();
  const { toogleModalScheduling } = useModals();
  const { getAll } = useGetList();

  const create = () => {
    const date = new Date(schedulingData.data.value); // já é uma string ISO
    const time = new Date(schedulingData.time.value); // também é uma string ISO

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const fullDateTime = setSeconds(setMinutes(setHours(date, hour), minute), second);

    const json = {
      id_exam: 1,
      date_time: fullDateTime.toISOString(),
      informations: "teste"
    };

    api.post('/scheduling', json)
      .then(response => {
        console.log(response.data);
        toogleModalScheduling();
        getAll();
        })
      .catch(error => console.error(error));

    console.log("Data final enviada:", json);
  }

  return { create };
}
