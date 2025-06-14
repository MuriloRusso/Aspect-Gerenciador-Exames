import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";

export default function useModals(){
    const { modalschedulingOpen, setModalschedulingOpen } = useContext(GlobalContext);
    const toogleModalscheduling = () => {
        setModalschedulingOpen(!modalschedulingOpen);
    }
    return {modalschedulingOpen, toogleModalscheduling }
}