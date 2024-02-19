import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({
  title,
  open,
  children,
  close,
  isMobile = window.matchMedia('(max-width: 500px)').matches,
}) => {
  return (
    <Dialog
      open={open}
      maxWidth={'md'}
      fullScreen={isMobile}
      sx={{ padding: '0px' }}
    >
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        onClick={close}
        aria-label="close"
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'white',
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};
export default Modal;
