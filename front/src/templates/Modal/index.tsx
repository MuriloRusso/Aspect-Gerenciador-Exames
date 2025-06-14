import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width: '800px', maxWidth: '100%'
};

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  title: string;
  children?: React.ReactNode;
};

export default function BasicModal({ open, handleClose, title, children }: ModalProps) {
  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
            <Typography variant="h5" component="h5">{title}</Typography>
            <Button onClick={handleClose}>
              <CloseIcon color='action'/>
            </Button>
          </Grid>
          <Divider/>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
