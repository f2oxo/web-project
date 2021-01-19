import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/slc_hero-videoGames-2.png";


const Common =(props) =>{
    return(
<>



<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

<section id="header" className="Home1">
    

    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="ml-5 pt-5">
              <div className="col-lg order-1 order-lg-2 header-img">

</div>
              
              </div>
                    
                <div class="card">
  <div class="card-body">
  <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
    <h5 class="card-title">{props.name}</h5>
   
    <p class="card-text">{props.desc}</p>
    
    <div className="mt-1">
              
                  <NavLink to={props.visit} ><button className="button">{props.btname}</button></NavLink>
                  
                  </div>
           
  </div>
</div>

               </div>
                   <div className="brand">
                   
                   </div>
               
              

              </div>
              
                </div>
            </div>
        </div>
    

  

</section>

</>
    );
};

export default Common;
