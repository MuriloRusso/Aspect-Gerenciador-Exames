import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import ModalHeader from '../ModalHeader';

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
          <ModalHeader title={title} handleClose={handleClose} />
          <Divider/>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
