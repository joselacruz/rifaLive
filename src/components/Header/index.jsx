import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ContainerIcon from '../ContainerIcon';
import './Header.css';
const Header = () => {
  return (
    <AppBar
      sx={{
        padding: '20px 20px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <ContainerIcon />
      {/* <nav>
        <ul>
          <Typography
            variant={'h6'}
            component="li"
          >
            Home
          </Typography>
          <Typography
            variant={'h6'}
            component="li"
          >
            Login
          </Typography>
        </ul>
      </nav> */}
      {/* <Typography
        variant="h4"
        component="h2"
      >
        Rifa en Vivo
      </Typography> */}
    </AppBar>
  );
};
export default Header;
