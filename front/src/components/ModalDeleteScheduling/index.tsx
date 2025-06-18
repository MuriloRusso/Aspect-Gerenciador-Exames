import BasicModal from "../../templates/Modal";
import useModals from "../../hooks/useModals";
import { Divider, Grid, Typography } from "@mui/material";
import ModalDeleteSchedulingFooter from "../ModalDeleteSchedulingFooter";

export default function ModalDeleteScheduling(){
    const { modalDeleteSchedulingOpen, toogleModalDeleteScheduling, selectedScheduling } = useModals();
    return (
        <BasicModal open={modalDeleteSchedulingOpen} handleClose={toogleModalDeleteScheduling} title="Excluir Agendamento?">
            <Typography variant="subtitle1" component="p" sx={{paddingY: 3}}>Tem certeza de que deseja excluír esse agendamento?</Typography>
            <Grid sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2}}>
                <Grid>
                    <Typography variant="subtitle1" component="p" sx={{fontWeight: 'bold'}}>Data:</Typography>
                    <Typography variant="subtitle1" component="p">{selectedScheduling?.date_time}</Typography>
                </Grid>

                <Grid>
                    <Typography variant="subtitle1" component="p" sx={{fontWeight: 'bold'}}>Horário:</Typography>
                    <Typography variant="subtitle1" component="p">{selectedScheduling?.date_time}</Typography>
                </Grid>

                <Grid sx={{width: "100%"}}>
                    <Typography variant="subtitle1" component="p" sx={{fontWeight: 'bold'}}>Informações:</Typography>
                    <Typography variant="subtitle1" component="p">{selectedScheduling?.informations}</Typography>
                </Grid>
            </Grid>
            
            <Divider/>
            <ModalDeleteSchedulingFooter/>
        </BasicModal>
    )
}