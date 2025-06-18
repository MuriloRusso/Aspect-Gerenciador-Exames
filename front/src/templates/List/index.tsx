import { Divider, Grid, Paper, Skeleton } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import useGetList from "../../hooks/useGetList";
import useColumns from "../../hooks/useColumns";
import ButtonNewScheduling from "../../components/ButtonNewScheduling";
import ButtonExamsList from "../../components/ButtonExamsList";
import { useEffect } from "react";
import useLoading from "../../hooks/useLoading";

export default function List() {
  const paginationModel = { page: 0, pageSize: 10 };
  const { rows } = useGetList();
  const { columns } = useColumns();
  const { loading } = useLoading();
  
  return (
      <Paper sx={{ maxHeight: "60vh" }}>
        <Grid sx={{ display: 'flex', justifyContent: "flex-end", padding: 2, gap: 2 }}>
          { loading ? <Skeleton variant="rounded" width='107px' height="40px" /> : <ButtonExamsList />}
          { loading ? <Skeleton variant="rounded" width='200' height="40px" /> : <ButtonNewScheduling />}
        </Grid>
        <Divider />
        {loading ? (
        <Skeleton variant="rectangular" width="100%" height="60vh" />
            ) : (
                <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
                localeText={{
                    noRowsLabel: 'Sem linhas',
                    columnMenuHideColumn: "Ocultar Coluna",
                    columnsManagementNoColumns: "Gerenciar Colunas",
                    columnMenuSortAsc: "Crescente",
                    columnMenuSortDesc: "Decrescente",
                    columnMenuUnsort: "Desordenar",
                    columnMenuFilter: "Filtro",
                    columnHeaderSortIconLabel: "Organizar",
                    filterOperatorContains: "Contém",
                    filterOperatorDoesNotContain: "Não Contém",
                    filterOperatorEquals: "Igual",
                    filterOperatorDoesNotEqual: "Não é igual",
                    filterOperatorStartsWith: "Começa com",
                    filterOperatorEndsWith: "Termina com",
                    filterOperatorIsEmpty: "Está vazio",
                    filterOperatorIsNotEmpty: "Não está vazio",
                    filterOperatorIsAnyOf: "Qualquer um",
                    columnMenuShowColumns: "Mostrar Coluna",
                    columnsManagementReset: "Resetar",
                    columnsManagementShowHideAllText: "Ocultar/Exibir",
                    columnsManagementSearchTitle: "Buscar",
                    filterPanelOperator: "Operador",
                    filterPanelColumns: "Coluna",
                    filterPanelInputLabel: "Valor",
                    filterPanelInputPlaceholder: "Valor do filtro",
                    paginationRowsPerPage: "Itens por página",
                    paginationDisplayedRows(params) {
                    return `${params.from}-${params.to} de ${params.count}`;
                    },
                    footerRowSelected(params) {
                    return `${params} Itens selecionados`;
                    },
                    paginationItemAriaLabel(type) {
                    switch (type) {
                        case 'next':
                        return 'Próxima Página';
                        case 'previous':
                        return 'Página Anterior';
                        case 'first':
                        return 'Primeira Página';
                        case 'last':
                        return 'Última Página';
                        default:
                        return `Página ${type}`;
                    }
                    },
                }}
                sx={{ border: 0 }}
                />
            )
        }
    </Paper>
  );
}
