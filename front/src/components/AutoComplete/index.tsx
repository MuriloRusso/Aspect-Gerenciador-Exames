import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function AutoComplete({options, label}:{options:string[], label: string}) {
  return (
    <Autocomplete
      disablePortal
    //   value={}
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}