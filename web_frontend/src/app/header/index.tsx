import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './styles.scss';


export const Header = () => {
    return (
        <AppBar position="static" className='App-Bar'>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{display: {xs: 'none', sm: 'block'}}}
                >
                    HeaderLogo
                </Typography>
                <Box sx={{flexGrow: 1}}/>
                <Box sx={{display: {xs: 'none', md: 'flex'}}} className='App-Bar_box'>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
