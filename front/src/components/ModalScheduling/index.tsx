import { Typography } from "@mui/material";
import BasicModal from "../../templates/Modal";

export default function ModalScheduling(){
    return (
        <BasicModal open={true} handleClose={()=>{}}>
            <Typography variant="h5" component="h5">Novo Agendamento</Typography>
        </BasicModal>
    )
}