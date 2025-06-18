import api from "../../services/api";
import useGetList from "../useGetList";
import useModals from "../useModals";
import useToast from "../useToast";

export default function useDelete() {
  
  const { selectedScheduling, toogleModalDeleteScheduling } = useModals();
  const { addToast } = useToast();
  const { getAll } = useGetList();

  const drop = () => {

    selectedScheduling &&

    api.delete('/scheduling/' + selectedScheduling.id)
      .then(response => {
        console.log(response.data);
        toogleModalDeleteScheduling();
        addToast({
          id: 0,
          severity: 'success',
          text: 'Agendamento excluído com sucesso!',
          variant: "filled"
        });
        getAll();
      })
      .catch(error => console.error(error));
  }

  return { drop };
}
