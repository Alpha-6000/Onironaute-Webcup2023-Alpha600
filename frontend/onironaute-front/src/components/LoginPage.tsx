import * as React from 'react';
import { useState } from 'react';


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { createMuiTheme } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../lib/int-firebase'
import { clientCollectionRef } from '../lib/firestore.collections'

import login from '../IMG/loginGreen.jpg';
import perso from '../IMG/img1.jpg' ; 
import inscription from '../IMG/inscription.png'
import '../css/Inscription.css'


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="brown" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Plant'éco
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


  export default function LoginPage() {
   

    const [passwordShown, setPasswordShown] = useState(false);
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
  
    

    
    const togglePassword = () => {
      setPasswordShown(!passwordShown) ;
      
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      if (Email === '') {
        return
    }
//const clientCollRef = collection(db, 'Client')
    addDoc(clientCollectionRef, {  Email, Password})
        .then(response => {
            console.log(response)
            alert ('Inscrition efffectuee')
        })
        .catch(error => {
            console.log(error.message)
        })
        
        
      console.log({
        Firstname: data.get('Firstname'),
        email: data.get('Email'),
        password: data.get('Password')

      });

       
    }

  return (
      
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        {/* <CssBaseline  /> */}

        <div style={{display: 'flex' , flexDirection : 'row'}}>
        

        <div style={{display: 'flex' , flexDirection : 'column'}}>
        <Box className = "box-screenLogin1" id="Inscription">
          <Avatar style={{width: '150px', height: '150px', border: '3px solid #7765435f'}} src={perso} alt='loginImg'/>
            
          
          {/* <img src={perso}  style={{width: '250px', height: 'auto', borderRadius: '50% 50% 50% 50%'}} alt="logo" /> */}
          <h2>Login </h2>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >


            <TextField
              //multiline
              InputLabelProps={
                {style: {color: "#60b460", fontSize: "13px"
                }}}
              InputProps={{style: {color: "#60b460" , fontSize: "13px"}}}
              margin="normal"
              required
              fullWidth
              name="Email"
              label="Email "
              type="text"
              id="Email"
              autoComplete="Email"
              value={Email} 
              onChange={ 
                e => setEmail(e.target.value)}
            />
        
            <TextField
              
              InputLabelProps={
                {style: {color: "#60b460", fontSize: "13px"
                }}}
              InputProps={{style: {color: "#60b460" , fontSize: "13px"}}}
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Mot de passe "
              type={passwordShown ? "text" : "Password"}
              id="Password"
              autoComplete="current-password"
              value={Password} 
              onChange={ 
                e => setPassword(e.target.value)}
            />
            {
              passwordShown 
              ? <Visibility className='visibility' onClick ={togglePassword} />
              : <VisibilityOff className='visibility' onClick ={togglePassword} />
            }
            


            <FormControlLabel
              style={{
                color: "#60b460"
              }}
              control={<Checkbox value="remember" 
                style={{
                color: "#60b460",
                alignContent: 'left'
              }} />}
              label="Remember me"
            />
            <br />
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "rgba(245, 245, 245, 0.767)",
                padding: "18px 36px",
                width: "300px",
                height : "50px",
                color: "rgb(96, 96, 96)",
                letterSpacing : "3px",
                fontWeight: "bold",
              }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se connecter
             
            </Button>
            
            <Grid container>
              <Grid item xs>
                <Link href='https://plant-eco.web.app/inscription/login/initialization' variant="body2"  
                   style={{
                    color: "rgb(96, 96, 96)",
                    textDecoration: " none"
                  }}>
                
                  Mot de passe oublié ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://plant-eco.web.app/inscription/inscription/inscription" variant="body2"  
                 style={{
                  color: "rgb(96, 96, 96)",

                  textDecoration: " none"
                }}>
                
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </div>
        </div>

        
        
        
      </Container>
    </ThemeProvider>
  );


}

