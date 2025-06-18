import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Container from './templates/Container';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container/>
    </LocalizationProvider>

  );
}

export default App;
