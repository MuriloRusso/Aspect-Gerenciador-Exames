import { TextField } from "@mui/material";
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ptBR } from 'date-fns/locale';
import { SchedulingData } from "../../types/scheduling";

type CustomDatePickerProps = {
  state: SchedulingData["data"];
  onChange: (newValue: Date | null) => void;
}

export default function CustomDatePicker({state, onChange}:CustomDatePickerProps) {
    const dateValue = state.value
    ? new Date(state.value)
    : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}  adapterLocale={ptBR}>
      <DatePicker
        label={state.label}
        // renderInput={(params) => <TextField {...params} />}
        onChange={onChange}
        value={dateValue}
      />

      <TimePicker />


    </LocalizationProvider>
    
  );

  // return <></>
}
