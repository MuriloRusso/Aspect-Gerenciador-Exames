import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ptBR } from 'date-fns/locale';
import { SchedulingData } from "../../types/scheduling";
import { TextField } from '@mui/material';

type CustomDatePickerProps = {
  state: SchedulingData["data"];
  onChange: (newValue: Date | null) => void;
}

export default function CustomDatePicker({ state, onChange }: CustomDatePickerProps) {
  const dateValue = state.value ? new Date(state.value) : null;
  const borderColor = "#f00";

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <DatePicker
        label={state.label}
        value={dateValue}
        onChange={onChange}
        // sx={{borderColor: state.error ? borderColor : borderColor,}}
        enableAccessibleFieldDOMStructure={false}
        slots={{
            textField: (params) => (<TextField
            {...params}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: state.error ? 'red' : '#000',  // cor da borda normal
                },
                // '&:hover fieldset': {
                //   borderColor: state.error ? 'darkred' : 'darkgray', // cor ao passar mouse
                // },
                // '&.Mui-focused fieldset': {
                //   borderColor: state.error ? 'red' : 'blue',  // cor quando focado
                // },
              },
            }}
          />
        )
      }}
        
    />
    </LocalizationProvider>
  );
}
