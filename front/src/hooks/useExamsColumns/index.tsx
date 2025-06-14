import { GridColDef } from "@mui/x-data-grid";

export default function useExamColumns() {
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Tipo de Exame', width: 200 },
        { field: 'specialty', headerName: 'Especialidade', width: 250 },
        { field: 'created_at', headerName: 'Criado', width: 150, }
    ];
    return {columns}
}