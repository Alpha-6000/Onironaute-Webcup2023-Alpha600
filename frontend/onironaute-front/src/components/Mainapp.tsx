import { Routes, Route } from "react-router-dom";
//import HomeScreen from "./HomeScreen";

import Products from "./Products";
import Contact from "./Contact";
import ScreenLogin from "./Inscription";

import Appcar from "./Descri";
import LoginPage from "./LoginPage";
import Preferences from "./Preference/Preferences";



const Mainapp = () => {
    return (
        <Routes>
            <Route path="/" element={<Appcar/>}/>
            <Route path="/description" element={<Appcar/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/inscription/inscription" element={<ScreenLogin/>}/>
            <Route path="/inscription/login" element={<LoginPage/>}/>
            <Route path="/Preferences" element={<Preferences/>}/>
        </Routes>
    );
}
export default Mainapp;