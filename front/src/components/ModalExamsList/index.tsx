import { Typography } from "@mui/material";
import BasicModal from "../../templates/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import useModals from "../../hooks/useModals";

export default function ModalScheduling(){
    // const {modalschedulingOpen} = useContext(GlobalContext);
    const { modalschedulingOpen, toogleModalscheduling } = useModals();
    return (
        <BasicModal open={modalschedulingOpen} handleClose={toogleModalscheduling}>
            <Typography variant="h5" component="h5">Novo Agendamento</Typography>
        </BasicModal>
    )
}