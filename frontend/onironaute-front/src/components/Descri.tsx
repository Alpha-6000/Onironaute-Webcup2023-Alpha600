import React, { useCallback, useEffect, useMemo, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Typography } from "@mui/material";
import FormatQuote from '@mui/icons-material/FormatQuote'
import { Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import '../css/homeScreen.css'
import ai1 from '../IMG/img1.jpg'
import ai2 from '../IMG/img2.jpg'
import ai3 from '../IMG/img3.jpg'
import ai4 from '../IMG/img4.jpg'
import logo from '../IMG/oniro.png' ; 
import ai5 from '../IMG/img5.jpg'
import ai6 from '../IMG/img6.jpg'
import ai7 from '../IMG/img7.jpg'
import LabelBottomNavigation from "./Footer";

function Appcar() {
  // State to programmatically set active child
  const [activeChild, setActiveChild] = useState(0);

  // Basically items = [1, 2, 3, 4]
  const items = useMemo(() => [1, 2, 3, 4], []);

  // The Keypress Event Handler
  const changeChild = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        // If supposed previous child is < 0 set it to last child
        setActiveChild((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
      } else if (e.key === "ArrowRight") {
        // If supposed next child is > length -1 set it to first child
        setActiveChild((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
      }
    },
    [items]
  );

  // Set and cleanup the event listener
  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  return (
    <div>   
         <div style={{ float: 'left', marginLeft: '10px', marginTop:'70px', width: '600px', padding: '30px'}}>
       <h4 className="h4descri">Bienvenue sur OniroNote</h4>
          <br />
          {/* <img className="img-descri" src={garden} alt="garden" /> */}
          <br /><br /><br /><br />
          
          <div>

        <p style={{ fontSize: "20px" , marginTop :'80px', marginLeft: '200px', marginRight: '50px', textAlign: 'justify', color: 'rgba(17, 17, 17, 0.642)'}}>Parce que vos <b style={{color: "#3A314C", fontSize:"20px"}} ><em>reves</em> </b> 
      importe beaucoup, au dela de l'<b style={{color: "#3A314C", fontSize:"20px"}}><em>imagination</em> </b> il est maintenant possible de prédire l'avenir grace à <b style={{color: "#3A314C", fontSize:"20px"}} ><em>ONIRIX</em> </b></p>
       
      </div>
      <Button href="#text-buttons" variant="contained" style={{backgroundColor:'#6B6FAC', marginLeft:'50%', marginTop:'5%'}}>Poursuivre avec OniroNote</Button>
      </div>  
         <div className="my-carousel">

        <Carousel
          index={activeChild} // <-- This controls the activeChild
          autoPlay={true} // <-- You probaly want to disable this for our purposes
          navButtonsAlwaysVisible
        >
      
              <img className='img-slogan' src={ai1} alt="ai1" />
              <img className='img-slogan' src={ai2} alt="ai2" />
              <img className='img-slogan' src={ai4} alt="ai4" />
              <img className='img-slogan' src={ai5} alt="ai5" />
                     
        </Carousel>
  
      </div>    

      <LabelBottomNavigation/>
    </div>
    
  );
}

export default Appcar;
