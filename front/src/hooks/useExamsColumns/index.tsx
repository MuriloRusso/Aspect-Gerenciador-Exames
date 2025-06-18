import { GridColDef } from "@mui/x-data-grid";
import { format } from "date-fns";

export default function useExamColumns() {
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Tipo de Exame', width: 200 },
    { field: 'specialty', headerName: 'Especialidade', width: 250 },
    { 
      field: 'created_at', 
      headerName: 'Criado', 
      width: 150,
      renderCell: (params) => {
        if (!params.value) return '';
        return format(new Date(params.value), "dd/MM/yyyy HH:mm");
      }
    }
  ];
  return { columns };
}
