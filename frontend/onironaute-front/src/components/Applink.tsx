import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

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
import Avatar from '@mui/material/Avatar';
// import { Outlet, Link } from "react-router-dom";
// import { HashRouter as Router, Route } from 'react-router-dom'

import logo from '../IMG/oniro.png';
import '../css/homeScreen.css'
import '../css/fonts.css'


export interface IUser {
  imageUrl: string
  name: string
  email: string
}


export function Login() {
  const [profile, setProfile] = useState<IUser | null>({ email: '', name: '', imageUrl: '' });
  const clientId = '570176881118-cmg2l19vmtept63bisrkj9gl4cdanemu.apps.googleusercontent.com';
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res: any) => {
    setProfile(res.profileObj);
  };

  const onFailure = (err: any) => {
    console.log('failed', err);
  };

  const logOut = () => {
    setProfile(null);
  };

  return (
    <div>
      {profile ? (
        <div>

          <GoogleLogout clientId={clientId} buttonText="Se déconnecter" onLogoutSuccess={logOut} />
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Se connecter avec Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      )}
    </div>
  );
}


const settings = ['Profile', 'Account', 'Dashboard'];
export function DefaultLogin() {

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [profile, setProfile] = useState<IUser | null>({ email: '', name: '', imageUrl: '' });
  const clientId = '570176881118-cmg2l19vmtept63bisrkj9gl4cdanemu.apps.googleusercontent.com';
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res: any) => {
    setProfile(res.profileObj);
  };

  const onFailure = (err: any) => {
    console.log('failed', err);
  };

  const logOut = () => {
    setProfile(null);
  };


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      {profile ? (
        <div>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={profile.name} src={profile.imageUrl} />
                </IconButton>

              </Tooltip>
              <span style={{color : 'rgba(0, 0, 0, 0.879)' , textTransform : 'capitalize', marginLeft : '10px'}}>{profile.name}</span>
              

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{profile.email}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Compte</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                <GoogleLogout clientId={clientId} buttonText="Se déconnecter" onLogoutSuccess={logOut} />
                </MenuItem>
              </Menu>
            </Box>

          </Toolbar>
        </div>
      ) : (
        <div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <button className='login-button'>
                  S'inscrire
                </button>
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
                <Typography textAlign="center">
                  <Link className='link' to='/inscription/inscription'>S'inscrire</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link className='link' to='/inscription/login'>Se connecter</Link>
                </Typography>
              </MenuItem>
              <br />
              <Typography textAlign="center">ou</Typography>
              <br />
              <MenuItem onClick={handleCloseUserMenu}>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Continuer avec Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
              </MenuItem>
            </Menu>
          </Box>
        </div>

      )}
    </div>

  )
}


const Applink = () => {
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

  //---------------login config part --------------------//

  const [profile, setProfile] = useState<IUser | null>({ email: '', name: '', imageUrl: '' });
  const clientId = '570176881118-cmg2l19vmtept63bisrkj9gl4cdanemu.apps.googleusercontent.com';
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res: any) => {
    setProfile(res.profileObj);
  };

  const onFailure = (err: any) => {
    console.log('failed', err);
  };

  const logOut = () => {
    setProfile(null);
  };

  return (
    <div>

      <AppBar position="fixed" sx={{ backgroundColor: 'white', height: '80px', marginBottom: '40px' }}>
        <Toolbar disableGutters>
          <Link className='link' to='/'><img className="logo" src={logo} alt="logo" /></Link>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', backgroundColor: 'white' } }}>

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
                display: { xs: 'block', md: 'none', margin: '' },
              }}
            >

              {/* ******************hamburger menu */}

              <MenuItem
                onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link className='link' to="/description">Accueil</Link>
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link className='link' to='/products'>A propos</Link>

                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link className='link' to='/onironote'>Poursuivre avec Onironaute</Link>
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link className='link' to='/contact'>Contact</Link>
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
              sx={{ my: 2, color: '#322843', display: 'block', marginLeft: '20px', fontSize: '15px', fontFamily: 'Montserrat-Bold' }}
            >
              <Link className='link' to='/description'>Accueil</Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#322843', display: 'block', marginLeft: '20px', fontSize: '15px', fontFamily: 'Montserrat-Bold' }}
            >
              <Link className='link' to='/products'>A propos</Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#322843', display: 'block', marginLeft: '20px', fontSize: '15px', fontFamily: 'Montserrat-Bold' }}
            >
              <Link className='link' to='/contact'>Poursuivre avec OniroNote</Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#322843', display: 'block', marginLeft: '20px', fontSize: '15px', fontFamily: 'Montserrat-Bold' }}
            >
              <Link className='link' to='/contact'>Contact</Link>
            </Button>

          </Box>

          <DefaultLogin />

        </Toolbar>


      </AppBar>
      <hr />
      <Mainapp />

      {/* <img src={img2} alt = "img2"/>
      <img className='bg-image' src={img3} alt = "img3"/> */}

    </div>

  );
};
export default Applink;
