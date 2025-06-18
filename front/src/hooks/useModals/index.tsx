import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";

export default function useModals(){
    const { modalSchedulingOpen, setModalSchedulingOpen, modalExamsOpen, setModalExamsOpen } = useContext(GlobalContext);
    const toogleModalScheduling = () => {
        setModalSchedulingOpen(!modalSchedulingOpen);
    }
    const toogleModalExamsList = () => {
        setModalExamsOpen(!modalExamsOpen);
    }
    return {modalSchedulingOpen, toogleModalScheduling, modalExamsOpen, toogleModalExamsList }
}