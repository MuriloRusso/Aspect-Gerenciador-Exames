import { TextField } from "@mui/material";
import { SchedulingData } from "../../types/scheduling";

type State = {
    value: string;
    error?: boolean;
    errorText?: string;
    placeholder?: string;
    required?: boolean;
}


type inputProps = {
    name: keyof SchedulingData;
    state: State;
    onChange: (fieldName: keyof SchedulingData, newValue: string) => void;
    rows?: number;
    multiline?: boolean;
};


export default function Input({name, state, onChange, rows, multiline}:inputProps){
    const borderColor = "#f00";
    return (
        <TextField
            // variant="standard"
            value={state.value}
            onChange={(e) => onChange(name, e.target.value)}
            multiline
            rows={rows ? rows : 1}

            error={state.error}
            helperText={state.error ? state.errorText : ""}
            required={state.required}
            placeholder={state.placeholder}
            sx={{width: "100%", minWidth: 40, borderRadius: '8px', borderColor: state.error ? borderColor : "#000", backgroundColor: "#fff"}}
        />
    )
}