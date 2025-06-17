import BasicModal from "../../templates/Modal";
import useModals from "../../hooks/useModals";
import Form from "../../templates/Form";
import ModalSchedulingFooter from "../ModalSchedulingFooter";
import { Divider } from "@mui/material";

export default function ModalScheduling(){
    const { modalSchedulingOpen, toogleModalScheduling } = useModals();
    return (
        <BasicModal open={modalSchedulingOpen} handleClose={toogleModalScheduling} title="Novo Agendamento">
            <Form/>
            <Divider/>
            <ModalSchedulingFooter/>
        </BasicModal>
    )
}