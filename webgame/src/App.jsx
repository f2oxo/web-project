import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home.jsx";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import {Switch,Route, Redirect} from "react-router-dom";
import Shop from "./Shop";
import Footer from "./Footer";
import Join from "./Join";

const App=()=>{
    return(
<>
<Navbar/>
<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/reviews" component={Service} />
    <Route exact path="/contact" component={Contact} />
 
    <Route exact path="/join" component={Join} />
    <Redirect to= "/"/>
<Home/>
</Switch>
<Footer/>

</>
    );
};

export default App;
