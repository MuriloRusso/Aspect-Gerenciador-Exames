import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";

export default function useLoading(){
    const { loading, setLoading } = useContext(GlobalContext);
    const toogleLoading = () => {
        setLoading(!loading);
    }
    
    return { loading , toogleLoading}
}