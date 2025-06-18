import useFields from "../useFields";
import api from '../../services/api';
import { setHours, setMinutes, setSeconds } from 'date-fns';
import useModals from "../useModals";
import useGetList from "../useGetList";
import useToast from "../useToast";

export default function useCreate() {
  const { schedulingData } = useFields();
  const { toogleModalScheduling } = useModals();
  const { getAll } = useGetList();
  const { addToast } = useToast();

  const create = () => {
    const date = new Date(schedulingData.data.value);
    const time = new Date(schedulingData.time.value);

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
        addToast({
          id: 0,
          severity: 'success',
          text: 'Agendamento feito com sucesso!',
          variant: "filled"
        });
        getAll();
      })
      .catch(error => console.error(error));

    console.log("Data final enviada:", json);
  }

  return { create };
}
