import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import { Scheduling } from "../../types/scheduling";
import useFields from "../useFields";

export default function useModals(){
    const {
        selectedScheduling,
        setSelectedScheduling,
        modalSchedulingOpen,
        setModalSchedulingOpen,
        modalExamsOpen,
        setModalExamsOpen,
        modalDeleteSchedulingOpen,
        setModalDeleteSchedulingOpen
    } = useContext(GlobalContext);

    const { cleanFields } = useFields();

    const handleSelectedSchedulingChange = (value: Scheduling | null) => {
        setSelectedScheduling(value)
    }

    const toogleModalScheduling = () => {
        setModalSchedulingOpen(!modalSchedulingOpen);
        cleanFields();
    }
    const toogleModalDeleteScheduling = () => {
        setModalDeleteSchedulingOpen(!modalDeleteSchedulingOpen);
    }
    const toogleModalExamsList = () => {
        setModalExamsOpen(!modalExamsOpen);
    }
    return {
        selectedScheduling,
        handleSelectedSchedulingChange,
        modalSchedulingOpen,
        toogleModalScheduling,
        modalExamsOpen,
        toogleModalExamsList,
        modalDeleteSchedulingOpen,
        toogleModalDeleteScheduling
    }
}