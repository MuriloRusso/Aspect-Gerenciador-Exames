import { GridColDef } from "@mui/x-data-grid";
import TrashIcon from "../../components/TrashIcon";

export default function useColumns() {
    const columns: GridColDef[] = [
        // { field: 'id_exam', headerName: 'ID do Exame', width: 350 },
        { field: 'informations', headerName: 'Informações', width: 350 },
        { field: 'date_time', headerName: 'Data e Hora', width: 250 },
        { field: 'created_at', headerName: 'Criado', width: 250, },
        { field: '', headerName: 'Ações', width: 150, renderCell: function(e){
            return <TrashIcon title="Excluir"/>
        }}

    ];
    return {columns}
}