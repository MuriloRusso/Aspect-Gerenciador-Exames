import { GridColDef } from "@mui/x-data-grid";
import TrashIcon from "../../components/TrashIcon";
import useModals from "../useModals";
import { Scheduling } from "../../types/scheduling";
import { format } from "date-fns";

export default function useColumns() {
  const { toogleModalDeleteScheduling, handleSelectedSchedulingChange } = useModals();

  const handleDeleteScheduling = (e: Scheduling) => {
    handleSelectedSchedulingChange(e);
    toogleModalDeleteScheduling();
  };

  const columns: GridColDef[] = [
    {
      field: 'date_time',
      headerName: 'Data e Hora',
      width: 250,
      renderCell: (params) => {
        const date = params.value ? new Date(params.value) : null;
        return date ? format(date, "dd/MM/yyyy HH:mm") : "";
      },
    },
    {
      field: 'examName',
      headerName: 'Exame',
      width: 250,
      renderCell: (params) => params.row.exam?.name || '',
    },
    {
      field: 'examSpecialty',
      headerName: 'Especialidade',
      width: 250,
      renderCell: (params) => params.row.exam?.specialty || '',
    },
    { field: 'informations', headerName: 'Informações', width: 350 },
    {
      field: 'created_at',
      headerName: 'Criado',
      width: 250,
      renderCell: (params) => {
        const date = params.value ? new Date(params.value) : null;
        return date ? format(date, "dd/MM/yyyy HH:mm") : "";
      },
    },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <TrashIcon title="Excluir" onClick={() => handleDeleteScheduling(params.row)} />
      ),
    },
  ];

  return { columns };
}
