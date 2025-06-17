import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";

export default function useFields(){
    const { schedulingData, setSchedulingData } = useContext(GlobalContext);
    return {}
}