import { Typography } from "@mui/material";
import BasicModal from "../../templates/Modal";
import useModals from "../../hooks/useModals";
import Form from "../../templates/Form";

export default function ModalScheduling(){
    const { modalSchedulingOpen, toogleModalScheduling } = useModals();
    return (
        <BasicModal open={modalSchedulingOpen} handleClose={toogleModalScheduling} title="Novo Agendamento">
            <Form/>
        </BasicModal>
    )
}