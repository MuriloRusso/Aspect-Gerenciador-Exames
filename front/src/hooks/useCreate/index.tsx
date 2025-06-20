import useFields from "../useFields";
import api from '../../services/api';
import { setHours, setMinutes, setSeconds } from 'date-fns';
import useModals from "../useModals";
import useGetList from "../useGetList";
import useToast from "../useToast";
import { SchedulingData } from "../../types/scheduling";

export default function useCreate() {
  const { schedulingData } = useFields();
  const { toogleModalScheduling } = useModals();
  const { getAll } = useGetList();
  const { addToast } = useToast(); 
  const { handleChangeSchedulingData } = useFields();

  const validateFields = (): boolean => {
    let isValid = true;
    for (const key of Object.keys(schedulingData) as (keyof SchedulingData)[]) {
      const field = schedulingData[key];
      if (field.required && !field.value) {
        addToast({
          id: Math.random(),
          severity: 'error',
          text: `O campo ${field.label} é obrigatório.`,
          variant: 'filled'
        });
        handleChangeSchedulingData(key, "");
        isValid = false;
      }
    }
    return isValid;
  };


  const create = () => {
    if (!validateFields()) return;

    const date = new Date(schedulingData.data.value);
    const time = new Date(schedulingData.time.value);

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const fullDateTime = setSeconds(setMinutes(setHours(date, hour), minute), second);

    const json = {
      exam: { "id": Number(schedulingData.exam.value) },
      // id_exam: Number(schedulingData.exam.value) ,
      date_time: fullDateTime.toISOString(),
      informations: schedulingData.informations.value ? schedulingData.informations.value : ""
    };

    api.post('/scheduling', json)
      .then(response => {
        console.log(response.data);
        toogleModalScheduling();
        addToast({
          id: 1,
          severity: 'success',
          text: 'Agendamento feito com sucesso!',
          variant: "filled"
        });
        getAll();
      })
      .catch(error => {
        console.error(error);
        addToast({
          id: 2,
          severity: 'error',
          text: 'Erro ao agendar. Tente novamente.',
          variant: "filled"
        });
      });

    console.log("Data final enviada:", json);
  };

  return { create };
}
