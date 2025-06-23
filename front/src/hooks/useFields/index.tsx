import { useContext, useEffect } from "react"
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
    const cleanFields = () => {
        setSchedulingData(prev => {
        const cleaned = {} as SchedulingData;
        for (const key in prev) {
            cleaned[key as keyof SchedulingData] = {
            ...prev[key as keyof SchedulingData],
            value: "",
            error: false
            };
        }
        return cleaned;
        });
    };

    return { schedulingData, handleChangeSchedulingData, cleanFields }
}