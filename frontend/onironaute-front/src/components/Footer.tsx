import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import minD from '../IMG/minD.jpg'
import bocasay from '../IMG/bocasay.jpg'
import webCup from '../IMG/webcup.png'
import fullDigit from '../IMG/fullDigit.avif'
import ibonia from '../IMG/ibonia.png'
import telma from '../IMG/telma.png'
import pulse from '../IMG/pulse.png'
import p4h from '../IMG/p4h.png'
import novity from '../IMG/novity.jpg'
import nexta from '../IMG/nexta.png'
import nexources from '../IMG/nexources.png'
import ingenosya from '../IMG/ingenosya.jpg'
import inclusiv from '../IMG/inclusiv.png'
import '../css/Footer.css'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="black" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href=" "  className='fbicon'>
       OniroNote
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const attendLink = {
  email: 'alpha6000@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=100084369908608',
  minD: 'https://www.orange.mg',
  bocasay: 'https://www.ey.com/en_mg',
  heri: 'http://www.heri.mg',
  floribis: 'https://www.floribis.com',
  inviso: 'https://inviso-group.com',
  article1: 'https://www.feelhealthy.be/fr/sediplus-sleep/bien-dormir?gclid=Cj0KCQjw9deiBhC1ARIsAHLjR2CvqrdDNUQ0pQhRbFyBWw_uMgzsaBpuUuU__6McB2m3pkxwGHnCs4oaAktgEALw_wcB&gclsrc=aw.ds',
  article2: 'https://www.noovomoi.ca/horoscope/divination/article.signification-reve-commun.1.1649111.html',
  article3: 'https://www.passeportsante.net/fr/psychologie/Fiche.aspx?doc=interpreter-reves',
}

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation sx={{ backgroundColor:'#6B6FAC', marginLeft: '-10px', height: '230px', marginRight: '10px', width: '98%', padding: '10px', }}
        value={value} onChange={handleChange}>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', width: 'fit-content', height: 'fit-content' }}>
            <h4 style={{ marginLeft: '10px', marginRight: '10px' }}>Nos partenaires</h4>
            <br />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {/* <a href={attendLi6B6FACnk.orange} rel="noreferrer" target='_blank'><img className="img-footer" src={orange} alt="orange" /></a> */}
              <div style={{ display: 'flex', flexDirection: 'column', }}>
                <img className="img-footer" src={minD} alt="minD" />
                <img className="img-footer" src={webCup} alt="webCup" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', }}>
                <img className="img-footer" src={fullDigit} alt="fullDigit" />
                <a href={attendLink.bocasay} rel="noreferrer" target='_blank'><img className="img-footer" src={bocasay} alt="bocasay" /></a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', }}>
                <a href={attendLink.heri} rel="noreferrer" target='_blank'><img className="img-footer" src={ibonia} alt="ibonia" /></a>
                <a href={attendLink.inviso} rel="noreferrer" target='_blank'><img className="img-footer" src={telma} alt="telma" /></a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', }}>
                <a href={attendLink.heri} rel="noreferrer" target='_blank'><img className="img-footer" src={p4h} alt="p4h" /></a>
                <a href={attendLink.inviso} rel="noreferrer" target='_blank'><img className="img-footer" src={novity} alt="novity" /></a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', }}>
                <a href={attendLink.heri} rel="noreferrer" target='_blank'><img className="img-footer" src={nexta} alt="nexta" /></a>
                <a href={attendLink.inviso} rel="noreferrer" target='_blank'><img className="img-footer" src={nexources} alt="nexources" /></a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', }}>
                <a href={attendLink.heri} rel="noreferrer" target='_blank'><img className="img-footer" src={ingenosya} alt="ingenosya" /></a>
                <a href={attendLink.inviso} rel="noreferrer" target='_blank'><img className="img-footer" src={inclusiv} alt="inclusiv" /></a>
              </div>
              <a href={attendLink.floribis} rel="noreferrer" target='_blank'><img className="img-footer" src={pulse} alt="orange" /></a>

            </div>

          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '100px', height: 'fit-content' }}>
            <h4 style={{ marginLeft: '10px', marginRight: '10px' }}>Articles</h4>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '5px' }}>

              {/* <div style={{display: 'flex', flexDirection: 'column', backgroundColor:'brown'}}>
            <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />} 
          /> 
          <BottomNavigationAction label="Mail" value="folder" icon={<MailIcon />} />
          <BottomNavigationAction label="Facebook" value="folder" icon={<FacebookIcon />} />
          </div> */}

              <div style={{ display: 'flex', flexDirection: 'column', height: '50px' }}>
                <a className='fbicon' href={attendLink.article1} rel="noreferrer" target='_blank'>
                  <p className='paraicon'>
                  5 conseils pour mieux dormir</p>
                </a>
                <a className='fbicon' href={attendLink.article2} rel="noreferrer" target='_blank'>
                  <p className='paraicon'>
                  Les 10 rêves les plus communs et leurs significations </p>
                </a>
                <a className='fbicon' href={attendLink.article3} rel="noreferrer" target='_blank'>
                  <p className='paraicon'>
                  Interpréter ses rêves</p>
                </a>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '200px', height: 'fit-content' }}>
            <h4 style={{ marginLeft: '10px', marginRight: '10px' }}>Nous contacter</h4>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '5px' }}>

              {/* <div style={{display: 'flex', flexDirection: 'column', backgroundColor:'brown'}}>
            <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />} 
          /> 
          <BottomNavigationAction label="Mail" value="folder" icon={<MailIcon />} />
          <BottomNavigationAction label="Facebook" value="folder" icon={<FacebookIcon />} />
          </div> */}

              <div style={{ display: 'flex', flexDirection: 'column', height: '50px' }}>
                <p className='paraicon'><LocationOnIcon className='icon'/>Antananarivo</p>
                <p className='paraicon'><MailIcon className='icon'/>alpha6000@gmail.com</p>
                <a className='fbicon' href={attendLink.facebook} rel="noreferrer" target='_blank'>
                  <p className='paraicon'>
                    <FacebookIcon className='icon' />Alpha6000</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
          <Copyright />
        </div>
        </div>

        

      </BottomNavigation>

    </div>



  )
}
