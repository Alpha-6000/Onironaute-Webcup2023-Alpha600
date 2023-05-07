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

import login from '../IMG/img8.jpg';
import logo from '../IMG/oniro.png' ; 
import inscription from '../IMG/img9.jpg'
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


  export default function ScreenLogin() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [Firstname, setFirstname] = useState('')
    const [Lastname, setLastname] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Phonenumber, setPhonenumber] = useState('')
    const [Status, setStatus] = useState('')
    const [Cooperative, setCooperative] = useState('')
    const [Adresse, setAdresse] = useState('')
    const [Locationactivity, setLocationactivity] = useState('')
    

    
    const togglePassword = () => {
      setPasswordShown(!passwordShown) ;
      
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      if (Firstname === '') {
        return
    }
//const clientCollRef = collection(db, 'Client')
    addDoc(clientCollectionRef, {Firstname, Lastname, Email, Password, Phonenumber, Status, Cooperative, Adresse, Locationactivity})
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
        <div style={{display: 'flex' , flexDirection : 'column' , marginLeft: '-350px', marginTop: '350px'}}>
          <img src={inscription} alt="inscription" />
        </div>

        <div style={{display: 'flex' , flexDirection : 'column'}}>
        <Box className = "box-screenLogin" id="Inscription">
          {/* <Avatar src={login} alt='loginImg'>
            <LockOutlinedIcon />
          </Avatar> */}
          <img className="logo" src={logo} alt="logo" />
          <h2>INSCRIPTION</h2>
          
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
              name="Firstname"
              label="Prénom"
              type="text"
              id="Firstname"
              autoComplete="Firstname"
              autoFocus
              value={Firstname} 
              onChange={ 
                e => setFirstname(e.target.value)}
              
            />

            <TextField
              //multiline
              InputLabelProps={
                {style: {color: "#60b460", fontSize: "13px"
                }}}
              InputProps={{style: {color: "#60b460" , fontSize: "13px"}}}
              margin="normal"
              required
              fullWidth
              name="Lastname"
              label="Nom"
              type="text"
              id="Lastname"
              autoComplete="Lastname"
              value={Lastname} 
              onChange={ 
                e => setLastname(e.target.value)}
              
            />

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
              label="Email Address"
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
            
            <TextField
              //multiline
              InputLabelProps={
                {style: {color: "#60b460", 
                fontSize: "13px",
                }}}
              InputProps={{style: {color: "#60b460" , fontSize: "13px", marginTop: "-10px"}}}
              
              required
              fullWidth
              name="Phonenumber"
              label="Numero téléphone"
              type="number"
              id="Phonenumber"
              autoComplete="Phonenumber"
              value={Phonenumber} 
              onChange={ 
                e => setPhonenumber(e.target.value)}
              
            />

            <TextField
              //multiline
              InputLabelProps={
                {style: {color: "#60b460", fontSize: "13px"
                }}}
              InputProps={{style: {color: "#60b460" , fontSize: "13px"}}}
              margin="normal"
              required
              fullWidth
              name="Status"
              label="Status : Agriculteur/Cooperative/Bailleurs de fonds/Autres à préciser"
              type="text"
              id="Status"
              autoComplete="Status"
              value={Status} 
              onChange={ 
                e => setStatus(e.target.value)}
            />

            <TextField
              //multiline
              InputLabelProps={
                {style: {color: "#60b460", fontSize: "13px"
                }}}
              InputProps={{style: {color: "#60b460" , fontSize: "13px"}}}
              margin="normal"
              required
              fullWidth
              name="Cooperative"
              label="Cooperative membre"
              type="text"
              id="Cooperative"
              autoComplete="Cooperative"
              value={Cooperative} 
              onChange={ 
                e => setCooperative(e.target.value)}
            />

            <TextField
              //multiline
              InputLabelProps={
                {style: {color: "#60b460", fontSize: "13px"
                }}}
              InputProps={{style: {color: "#60b460" , fontSize: "13px"}}}
              margin="normal"
              required
              fullWidth
              name="Adresse"
              label="Adresse"
              type="text"
              id="Adresse"
              autoComplete="Adresse"
              value={Adresse} 
              onChange={ 
                e => setAdresse(e.target.value)}
            />

            <TextField
              //multiline
              InputLabelProps={
                {style: {color: "#60b460", fontSize: "13px"
                }}}
              InputProps={{style: {color: "#60b460" , fontSize: "13px"}}}
              margin="normal"
              required
              fullWidth
              name="Locationactivity"
              label="Localisation de l'activité"
              type="text"
              id="Locationactivity"
              autoComplete="Locationactivity"
              value={Locationactivity} 
              onChange={ 
                e => setLocationactivity(e.target.value)}
            />

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
             S'inscrire
             
            </Button>
            
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"  
                   style={{
                    color: "silver",
                    textDecoration: " none"
                  }}>
                
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2"  
                 style={{
                  color: "silver",

                  textDecoration: " none"
                }}>
                
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        </div>
        </div>

        
        
        
      </Container>
    </ThemeProvider>
  );


}

