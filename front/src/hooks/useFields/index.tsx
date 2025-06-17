import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext";
import { SchedulingData } from "../../types/scheduling";

export default function useFields(){
    const { schedulingData, setSchedulingData } = useContext(GlobalContext);

    const handleChangeSchedulingData = (fieldName: keyof SchedulingData, newValue: string) => {
        setSchedulingData(prev => ({
            ...prev,
            [fieldName]: {
                ...prev[fieldName],
                value: newValue,
                error: prev[fieldName].required ? newValue.trim() === "" : false
            }
        }))
    }

    // handleChange


    return { schedulingData, handleChangeSchedulingData }
}