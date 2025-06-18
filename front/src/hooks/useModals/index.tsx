import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";

export default function useModals(){
    const {
        modalSchedulingOpen,
        setModalSchedulingOpen,
        modalExamsOpen,
        setModalExamsOpen,
        modalDeleteSchedulingOpen,
        setModalDeleteSchedulingOpen
    } = useContext(GlobalContext);

    const toogleModalScheduling = () => {
        setModalSchedulingOpen(!modalSchedulingOpen);
    }
    const toogleModalDeleteScheduling = () => {
        setModalDeleteSchedulingOpen(!modalDeleteSchedulingOpen);
    }
    const toogleModalExamsList = () => {
        setModalExamsOpen(!modalExamsOpen);
    }
    return {
        modalSchedulingOpen,
        toogleModalScheduling,
        modalExamsOpen,
        toogleModalExamsList,
        modalDeleteSchedulingOpen,
        toogleModalDeleteScheduling
    }
}