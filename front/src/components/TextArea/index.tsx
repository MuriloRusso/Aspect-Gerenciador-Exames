import { TextField } from "@mui/material";
import Input from "../Input";
import useFields from "../../hooks/useFields";

export default function TextArea(){
    const { schedulingData } = useFields();
    return <Input 
          state={schedulingData.informations}
          onChange={()=>{}}
          multiline
          rows={5}
        />
}