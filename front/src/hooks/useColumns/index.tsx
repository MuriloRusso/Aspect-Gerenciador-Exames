import { GridColDef } from "@mui/x-data-grid";

export default function useColumns() {
    const columns: GridColDef[] = [
        // { field: 'id_exam', headerName: 'ID do Exame', width: 350 },
        { field: 'informations', headerName: 'Informações', width: 150 },
        { field: 'date_time', headerName: 'Data e Hora', width: 150 },
        { field: 'created_at', headerName: 'Criado', width: 150, }
    ];
    return {columns}
}