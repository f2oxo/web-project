import React from "react";
import Common from "./Common";
import web from "../src/images/EASTSIDEgaming-logo-Black.png";

const About =() =>{
    return(
<>
<div> </div>
<Common 
name="About Us" 
imgsrc={web} 
visit="/contact"
btname="Contact Us"
desc="East Side Gaming is dedicated to providing its consumers with honest reviews of their favorite games and gaming products. We convey a full array of computer game direction and data, from top to bottom to speedy tips, from news about forthcoming games to proficient system guides. We accept that all gamers, from easygoing to bad-to-the-bone, advantage top-notch advisers to improve their gaming experience."
/>
</>
    );
};

export default About;
