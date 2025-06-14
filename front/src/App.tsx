import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Grid } from '@mui/material';
import List from './templates/List';
import BasicModal from './templates/Modal';
import ModalScheduling from './components/ModalScheduling';


function App() {
  return (
    <Grid sx={{backgroundColor: "#30503a", height: '100vh', padding: 2}}>
      <List/>
      <ModalScheduling/>
    </Grid>
  );
}

export default App;
