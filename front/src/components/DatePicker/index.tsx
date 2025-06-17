import { TextField } from "@mui/material";
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ptBR } from 'date-fns/locale';

type CustomDatePickerProps = {
  value: Date | null;
  onChange: (newValue: Date | null) => void;
}

export default function CustomDatePicker({value, onChange}:CustomDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}  adapterLocale={ptBR}>
      <DatePicker
        label="Data"
        // renderInput={(params) => <TextField {...params} />}
        onChange={onChange}
        value={value}
      />

      <TimePicker />


    </LocalizationProvider>
    
  );

  // return <></>
}
