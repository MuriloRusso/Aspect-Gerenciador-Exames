import api from "../../services/api";
import useGetList from "../useGetList";
import useLoading from "../useLoading";
import useModals from "../useModals";
import useToast from "../useToast";

export default function useDelete() {
  
  const { selectedScheduling, toogleModalDeleteScheduling } = useModals();
  const { addToast } = useToast();
  const { getAll } = useGetList();
  const { toogleLoading } = useLoading();

  const drop = () => {

    // toogleLoading(true);
    
    selectedScheduling &&
    
    api.delete('/scheduling/' + selectedScheduling.id)
      .then(response => {
        console.log(response.data);
        // toogleLoading();
        toogleModalDeleteScheduling();
        addToast({
          id: 0,
          severity: 'success',
          text: 'Agendamento excluído com sucesso!',
          variant: "filled"
        });
        getAll();
        // toogleLoading();
      })
      .catch(error => console.error(error));
  }

  return { drop };
}
