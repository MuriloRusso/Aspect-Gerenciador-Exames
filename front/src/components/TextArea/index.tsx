import { TextField } from "@mui/material";
import Input from "../Input";
import useFields from "../../hooks/useFields";

export default function TextArea(){
    const { schedulingData, handleChangeSchedulingData } = useFields();
    return <Input 
          state={schedulingData.informations}
          name="informations"
          onChange={handleChangeSchedulingData}
          multiline
          rows={5}
        />
}