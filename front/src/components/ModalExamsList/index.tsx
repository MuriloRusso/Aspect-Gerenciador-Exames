import { Typography } from "@mui/material";
import BasicModal from "../../templates/Modal";
import useModals from "../../hooks/useModals";
import ExamList from "../../templates/ExamList";

export default function ModalExamsList(){
    const { modalExamsOpen, toogleModalExamsList } = useModals();
    return (
        <BasicModal open={modalExamsOpen} handleClose={toogleModalExamsList} title="Exames">
            <ExamList/>
        </BasicModal>
    )
}