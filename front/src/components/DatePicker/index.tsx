import { TextField } from "@mui/material";
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function CustomDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Data"
        // renderInput={(params) => <TextField {...params} />}
        onChange={() => {}}
        value={null}
      />

      <TimePicker />


    </LocalizationProvider>
    
  );

  // return <></>
}
