import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ptBR } from 'date-fns/locale';
import { SchedulingData } from "../../types/scheduling";
import { TextField, TextFieldProps } from '@mui/material';

type CustomTimePickerProps = {
  state: SchedulingData["time"];
  onChange: (newValue: Date | null) => void;
};

export default function CustomTimePicker({ state, onChange }: CustomTimePickerProps) {
  const timeValue = state.value ? new Date(state.value) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <TimePicker
        label={state.label}
        value={timeValue}
        onChange={onChange}
        slotProps={{
          textField: {
            error: state.error,
            helperText: state.error ? state.errorText || 'Campo obrigatório' : '',
            sx: {
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: state.error ? 'red' : undefined,
                },
              },
            },
          } as TextFieldProps
        }}
      />
    </LocalizationProvider>
  );
}
