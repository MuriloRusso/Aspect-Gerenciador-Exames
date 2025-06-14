import { Typography } from "@mui/material";
import BasicModal from "../../templates/Modal";
import useModals from "../../hooks/useModals";

export default function ModalScheduling(){
    const { modalSchedulingOpen, toogleModalScheduling } = useModals();
    return (
        <BasicModal open={modalSchedulingOpen} handleClose={toogleModalScheduling}>
            <Typography variant="h5" component="h5">Novo Agendamento</Typography>
        </BasicModal>
    )
}