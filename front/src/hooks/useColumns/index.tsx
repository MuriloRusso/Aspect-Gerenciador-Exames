import { GridColDef } from "@mui/x-data-grid";
import TrashIcon from "../../components/TrashIcon";
import useModals from "../useModals";
import { Scheduling } from "../../types/scheduling";

export default function useColumns() {
    const { toogleModalDeleteScheduling, handleSelectedSchedulingChange } = useModals();

    const handleDeleteScheduling = (e:Scheduling) => {       
        handleSelectedSchedulingChange(e);
        toogleModalDeleteScheduling();
    }
    const columns: GridColDef[] = [
        // { field: 'id_exam', headerName: 'ID do Exame', width: 350 },
        { field: 'informations', headerName: 'Informações', width: 350 },
        { field: 'date_time', headerName: 'Data e Hora', width: 250 },
        { field: 'created_at', headerName: 'Criado', width: 250, },
        { field: '', headerName: 'Ações', width: 100, renderCell: function(e){
            return <TrashIcon title="Excluir" onClick={() => handleDeleteScheduling(e.row)}/>
        }}
    ];
    return {columns}
}