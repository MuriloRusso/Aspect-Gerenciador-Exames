import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ptBR } from 'date-fns/locale';
import { SchedulingData } from "../../types/scheduling";

type CustomTimePickerProps = {
  state: SchedulingData["data"];
  onChange: (newValue: Date | null) => void;
}

export default function CustomTimePicker({ state, onChange }: CustomTimePickerProps) {
  const timeValue = state.value ? new Date(state.value) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <TimePicker
        label={state.label}
        value={timeValue}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
}
