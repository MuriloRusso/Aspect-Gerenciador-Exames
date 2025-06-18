import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import { SchedulingData } from '../../types/scheduling';
import { Option } from '../../types/input';

type AutoCompleteProps = {
  options: Option[];
  state: SchedulingData["exam"];
  onChange: (fieldName: keyof SchedulingData, newValue: string) => void;
};

export default function AutoComplete({ options, state, onChange }: AutoCompleteProps) {
  // Encontrar o objeto da opção correspondente ao value atual
  const selectedOption = options.find(option => option.value.toString() === state.value.toString()) || null;

  return (
    <Autocomplete
      disablePortal
      value={selectedOption}
      onChange={(_, newValue: Option | null) => {
        onChange('exam', newValue?.value.toString() || '');
      }}
      options={options}
      getOptionLabel={(option) => option.text}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={state.label}
          error={state.error}
          helperText={state.error ? state.errorText || 'Campo obrigatório' : ''}
        />
      )}
    />
  );
}
