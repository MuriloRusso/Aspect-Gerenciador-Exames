import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";

export default function useModals(){
    const { modalShedulingOpen, setModalShedulingOpen } = useContext(GlobalContext);
    const toogleModalSheduling = () => {
        setModalShedulingOpen(!modalShedulingOpen);
    }
    return {modalShedulingOpen, toogleModalSheduling }
}