import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import '../css/homeScreen.css'
import LabelBottomNavigation from './Footer'
import LoginPage from './LoginPage';
import DashProfile from './DashProfile';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  marginLeft: '20px',
  margin: '20px',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <div>
      <div style={{ float: 'left', marginLeft: '10px' }}>
        <Box sx={{  marginTop: '90px', marginLeft: '30px' , width: '700px'}}>
          <h2 className='title-magasin'>Points de vente</h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <LocalGroceryStoreIcon sx={{ margin: '30px', fontSize: '50px', marginTop: '50px' }} />
                <div className='Contact-content'>
                  <h4>Nom magasin1</h4>
                  <h4>Adresse</h4>
                  <h4>Téléphone</h4>
                  <h4>Facebook page/Website</h4>
                </div>
              </Item>
            </Grid>


            <Grid item xs={6}>
              <Item>
                <LocalGroceryStoreIcon sx={{ margin: '30px', fontSize: '50px', marginTop: '50px' }} />
                <div className='Contact-content'>
                  <h4>Nom magasin2</h4>
                  <h4>Adresse</h4>
                  <h4>Téléphone</h4>
                  <h4>Facebook page/Website</h4>
                </div>
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <LocalGroceryStoreIcon sx={{ margin: '30px', fontSize: '50px', marginTop: '50px' }} />
                <div className='Contact-content'>
                  <h4>Nom magasin3</h4>
                  <h4>Adresse</h4>
                  <h4>Téléphone</h4>
                  <h4>Facebook page/Website</h4>
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <LocalGroceryStoreIcon sx={{ margin: '30px', fontSize: '50px', marginTop: '50px' }} />
                <div className='Contact-content'>
                  <h4>Nom magasin4</h4>
                  <h4>Adresse</h4>
                  <h4>Téléphone</h4>
                  <h4>Facebook page/Website</h4>
                </div>
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <LocalGroceryStoreIcon sx={{ margin: '30px', fontSize: '50px', marginTop: '50px' }} />
                <div className='Contact-content'>
                  <h4>Nom magasin5</h4>
                  <h4>Adresse</h4>
                  <h4>Téléphone</h4>
                  <h4>Facebook page/Website</h4>
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <LocalGroceryStoreIcon sx={{ margin: '30px', fontSize: '50px', marginTop: '50px' }} />
                <div className='Contact-content'>
                  <h4>Nom magasin6</h4>
                  <h4>Adresse</h4>
                  <h4>Téléphone</h4>
                  <h4>Facebook page/Website</h4>
                </div>
              </Item>
            </Grid>
          </Grid>
          {/* <div className='Contact-us'>
        <h2>Nous contacter</h2>
        <MailIcon sx={{margin: '30px', fontSize: '40px'}}/>  <p className='para-cont'> planteco.gmail.com</p>
         <FacebookIcon sx={{margin: '30px', fontSize: '40px'}}/> <p className='para-cont'>Plant'éco Madagascar</p>
        <LanguageIcon sx={{margin: '30px', fontSize: '40px'}}/>  <p className='para-cont'>planteco.web.app</p>
      </div> */}

         
        </Box>

      </div>
      
      <div style={{ float: 'left', marginLeft: '50px', marginRight: '15px',  marginTop: '160px' }}>   
            
          </div>
            <LabelBottomNavigation />
    </div>


  );
}
