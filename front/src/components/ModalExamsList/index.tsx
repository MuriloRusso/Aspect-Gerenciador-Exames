import { Typography } from "@mui/material";
import BasicModal from "../../templates/Modal";
import useModals from "../../hooks/useModals";

export default function ModalExamsList(){
    const { modalExamsOpen, toogleModalExamsList } = useModals();
    return (
        <BasicModal open={modalExamsOpen} handleClose={toogleModalExamsList}>
            <Typography variant="h5" component="h5">Exames</Typography>
        </BasicModal>
    )
}