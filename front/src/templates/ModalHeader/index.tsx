import { Button, Grid, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

  
export default function ModalHeader({title, handleClose}:{title: string; handleClose: () => void;}){
    return (
        <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", paddingBottom: 1}}>
            <Typography variant="h5" component="h5">{title}</Typography>
            <Button onClick={handleClose}>
                <CloseIcon color='action'/>
            </Button>
        </Grid>
    )
}