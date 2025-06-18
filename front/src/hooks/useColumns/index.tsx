import { GridColDef } from "@mui/x-data-grid";
import TrashIcon from "../../components/TrashIcon";
import useModals from "../useModals";

export default function useColumns() {
    const { toogleModalDeleteScheduling } = useModals();
    const columns: GridColDef[] = [
        // { field: 'id_exam', headerName: 'ID do Exame', width: 350 },
        { field: 'informations', headerName: 'Informações', width: 350 },
        { field: 'date_time', headerName: 'Data e Hora', width: 250 },
        { field: 'created_at', headerName: 'Criado', width: 250, },
        { field: '', headerName: 'Ações', width: 100, renderCell: function(e){
            return <TrashIcon title="Excluir" onClick={toogleModalDeleteScheduling}/>
        }}
    ];
    return {columns}
}