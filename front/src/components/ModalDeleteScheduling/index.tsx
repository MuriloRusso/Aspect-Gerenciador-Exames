import BasicModal from "../../templates/Modal";
import useModals from "../../hooks/useModals";
import { Divider, Grid, Typography } from "@mui/material";
import ModalDeleteSchedulingFooter from "../ModalDeleteSchedulingFooter";
import { format } from "date-fns";

export default function ModalDeleteScheduling() {
  const { modalDeleteSchedulingOpen, toogleModalDeleteScheduling, selectedScheduling } = useModals();

  const formatDateTime = (dateStr?: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "";
    return format(date, "dd/MM/yyyy HH:mm");
  };

  return (
    <BasicModal open={modalDeleteSchedulingOpen} handleClose={toogleModalDeleteScheduling} title="Excluir Agendamento?">
      <Typography variant="subtitle1" component="p" sx={{ paddingY: 3 }}>
        Tem certeza de que deseja excluír esse agendamento?
      </Typography>
      <Grid sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, paddingBottom: 3 }}>
        
        <Grid>
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: 'bold' }}>Exame:</Typography>
          <Typography variant="subtitle1" component="p">{selectedScheduling?.exam?.name || '-'}</Typography>
        </Grid>

        <Grid>
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: 'bold' }}>Especialidade:</Typography>
          <Typography variant="subtitle1" component="p">{selectedScheduling?.exam?.specialty || '-'}</Typography>
        </Grid>

        <Grid>
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: 'bold' }}>Data:</Typography>
          <Typography variant="subtitle1" component="p">
            {selectedScheduling?.date_time ? formatDateTime(selectedScheduling.date_time).split(' ')[0] : '-'}
          </Typography>
        </Grid>

        <Grid>
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: 'bold' }}>Horário:</Typography>
          <Typography variant="subtitle1" component="p">
            {selectedScheduling?.date_time ? formatDateTime(selectedScheduling.date_time).split(' ')[1] : '-'}
          </Typography>
        </Grid>

        <Grid>
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: 'bold' }}>Criado em:</Typography>
          <Typography variant="subtitle1" component="p">
            {selectedScheduling?.created_at ? formatDateTime(selectedScheduling.created_at) : '-'}
          </Typography>
        </Grid>

        <Grid sx={{ width: "100%" }}>
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: 'bold' }}>Informações:</Typography>
          <Typography variant="subtitle1" component="p">{selectedScheduling?.informations || '-'}</Typography>
        </Grid>
      </Grid>

      <Divider />
      <ModalDeleteSchedulingFooter />
    </BasicModal>
  );
}
