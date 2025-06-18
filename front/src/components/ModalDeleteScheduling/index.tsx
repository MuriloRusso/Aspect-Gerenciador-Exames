import BasicModal from "../../templates/Modal";
import useModals from "../../hooks/useModals";
import { Divider, Typography } from "@mui/material";
import ModalDeleteSchedulingFooter from "../ModalDeleteSchedulingFooter";

export default function ModalDeleteScheduling(){
    const { modalDeleteSchedulingOpen, toogleModalDeleteScheduling } = useModals();
    return (
        <BasicModal open={modalDeleteSchedulingOpen} handleClose={toogleModalDeleteScheduling} title="Excluir Agendamento?">
            <Typography variant="subtitle1" component="p" sx={{paddingY: 3}}>Tem certeza de que deseja excluír esse agendamento?</Typography>
            <Divider/>
            <ModalDeleteSchedulingFooter/>
        </BasicModal>
    )
}