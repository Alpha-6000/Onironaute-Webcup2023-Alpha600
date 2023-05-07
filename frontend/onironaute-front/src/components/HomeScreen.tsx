import * as React from 'react'

import { Link } from 'react-router-dom'
import Mainapp from './Mainapp'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../IMG/oniro.png' ; 
import '../css/homeScreen.css'
import '../css/fonts.css'

const pages = ['Description', 'Nos produits et services', 'Contact'];
const settings = ['Se connecter', 'S\'inscrire'];

const HomeScreen = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
        
      <AppBar position="fixed">
        <Container 
      
      sx={{ backgroundColor: 'white', height: '80px'}}>
        <Toolbar disableGutters>
          <Link to ='/'><img className="logo" src={logo} alt="logo" /></Link>  
        

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
            {/* logging buton */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: '#322843' }}
            >
              <MenuIcon /> 
            </IconButton> 
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', margin:'' },
              }}
            >

              {/* ******************hamburger menu */}
             
                <MenuItem  
                 onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                 <Link to="/description">Accueil</Link> 
                  </Typography>
                </MenuItem>
                <MenuItem  
                 onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                 <Link to='/products'>Nos produits et services</Link> 
                
                  </Typography>
                </MenuItem>
                <MenuItem  
                 onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                 <Link to ='/contact'>Contact</Link> 
                  </Typography>
                </MenuItem>
                
                
             

            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'red',
              textDecoration: 'none',
              paddingTop: '-20px'
            }}
          > 

          </Typography> 
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#322843', display: 'block' , marginLeft: '20px', fontSize:'15px', fontFamily: 'Montserrat-Bold'}}
              >
                <Link to="/description">Accueil</Link> 
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#322843', display: 'block' , marginLeft: '20px', fontSize:'15px', fontFamily: 'Montserrat-Bold'}}
              >
                 <Link to='/products'>A propos</Link> 
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#322843', display: 'block' , marginLeft: '20px', fontSize:'15px', fontFamily: 'Montserrat-Bold'}}
              >
                <Link to ='/contact'>Poursuivre avec OniroNote</Link> 
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#322843', display: 'block' , marginLeft: '20px', fontSize:'15px', fontFamily: 'Montserrat-Bold'}}
              >
                <Link to ='/contact'>Contact</Link> 
              </Button>
              
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <button className='login-button'>S'inscrire</button>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">S'inscrire</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Se connecter</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Se connecter avec Google</Typography>

                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
     
    </AppBar>
   <hr />
   <Mainapp/>
      
    {/* <img src={img2} alt = "img2"/>
    <img className='bg-image' src={img3} alt = "img3"/> */}

  </div>
       
  );
};
export default HomeScreen;
