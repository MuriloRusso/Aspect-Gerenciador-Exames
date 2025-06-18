import { useContext, useEffect } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";

export default function useLoading(){
    const { loading, setLoading } = useContext(GlobalContext);
    const toogleLoading = (value?: boolean) => {
        console.log(value);
        
        setLoading(value ? value : !loading);
    }
    useEffect(()=>{
        console.log('loading hook');
        console.log(loading);
    }, [loading])
    
    return { loading , toogleLoading}
}