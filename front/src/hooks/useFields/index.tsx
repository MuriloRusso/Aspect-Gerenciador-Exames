import { useContext, useEffect } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import { SchedulingData } from "../../types/scheduling";

export default function useFields(){
    const { schedulingData, setSchedulingData } = useContext(GlobalContext);

    const handleChangeSchedulingData = (fieldName: keyof SchedulingData, newValue: string) => {
        console.log(newValue.trim() === "");
        
        setSchedulingData(prev => ({
            ...prev,
            [fieldName]: {
                ...prev[fieldName],
                value: newValue,
                error: prev[fieldName].required ? newValue.trim() === "" : false
            }
        }))
    }
    useEffect(()=>{
        console.log('schedulingData');
        console.log(schedulingData);
    }, [schedulingData])

    return { schedulingData, handleChangeSchedulingData }
}