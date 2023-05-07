import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import aii1 from '../IMG/img2.jpg'
import aii2 from '../IMG/kit1.png'


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  const [expanded4, setExpanded4] = React.useState(false);

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  

  return (
    <Container component="main" className='Product-container' >
       <br /><br /><br /><br /><br />
   

      
          <Card sx={{ maxWidth: 350 , textAlign: 'center', float: 'left', margin: '16px'}} >
          
        <CardHeader
          title="Serre intélligente"
          subheader="Demontable-Flexible-Facile à installer"
        />
        <img src={aii1} alt="aii1" className='img-card' />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Un kit complet équipé d'un système d'arrosage automatique, auto-régulation de température
          et humidification à l'intérieur de la serre 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
             {/*  <FavoriteIcon /> */}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded1}
            onClick={handleExpandClick1}
            aria-expanded={expanded1}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded1} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comment ça marche:</Typography>
            <Typography paragraph>
           Avec une structure légère, avec ouverture sur fenetre associé aux installations de composants electroniques
            </Typography>
            
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: 350 , textAlign: 'center', float: 'left', margin: '16px'}} >
          
        <CardHeader
          title="Kits pour serre"
          subheader="Materiels et accessoires"
        />
        <img src={aii1} alt="aii" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Nous vendons également des matériels et kits pour serre selon votre besoin
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* <FavoriteIcon /> */}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded2}
            onClick={handleExpandClick2}
            aria-expanded={expanded2}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded2} timeout="auto" unmountOnExit>
          <CardContent>
           
            <Typography paragraph>
            Des baches pour serre, piquets pour fixation, axes sur mesure
            </Typography>
            
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: 350 , textAlign: 'center', float: 'left', margin: '16px'}} >
          
        <CardHeader
          title="Formations"
        />
       
        <CardContent>
          <Typography variant="body2" color="text.secondary">
         Formations pour les agriculteurs et coopératives
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          {/*  <FavoriteIcon /> */}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded3}
            onClick={handleExpandClick3}
            aria-expanded={expanded3}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded3} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
            En partenariat avec d'autres institutions nationales relatives à l'agriculture, 
            nous offrons des formations aux coopératives sur les methodes de cultures pour améliorer
            les rendements des agriculteurs. 
            

            </Typography>
            <Typography paragraph>
            Nous travaillons également avec les organisations qui veulent apprendre à construire des serres comme les notres
            </Typography>
            
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: 350 , textAlign: 'center', float: 'left', margin: '16px'}} >
          
          <CardHeader
            title="Service    après   vente"
          />
         
          <CardContent>
            <Typography variant="body2" color="text.secondary">
          Support et conseil, service    après   vente, service d'entretien pour la serre
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            {/*  <FavoriteIcon /> */}
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded4}
              onClick={handleExpandClick4}
              aria-expanded={expanded4}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded4} timeout="auto" unmountOnExit>
            <CardContent>
              
              <Typography paragraph>
              Après votre achat de serre chez nous, nous vous ferons le plaisir de vous assister que ce soit dans l'installation ou
           entretien de la serre.  
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

    </Container>
    
  );
}


