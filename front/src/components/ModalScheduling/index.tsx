import { Typography } from "@mui/material";
import BasicModal from "../../templates/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import useModals from "../../hooks/useModals";

export default function ModalScheduling(){
    // const {modalShedulingOpen} = useContext(GlobalContext);
    const { modalShedulingOpen, toogleModalSheduling } = useModals();
    return (
        <BasicModal open={modalShedulingOpen} handleClose={toogleModalSheduling}>
            <Typography variant="h5" component="h5">Novo Agendamento</Typography>
        </BasicModal>
    )
}