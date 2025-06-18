import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Grid } from '@mui/material';
import List from './templates/List';
import BasicModal from './templates/Modal';
import ModalScheduling from './components/ModalScheduling';
import ModalExamsList from './components/ModalExamsList';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Toast from './components/Toast';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid sx={{backgroundColor: "#30503a", height: '100vh', padding: 2}}>
        <List/>
        <ModalScheduling/>
        <ModalExamsList/>
        <Toast/>
      </Grid>
    </LocalizationProvider>

  );
}

export default App;
