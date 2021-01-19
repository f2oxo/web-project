import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/slc_hero-videoGames-2.png";


const Home =() =>{
    return(
<>



<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

<section id="header" className="Home">
    

    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                <h1 class="ml4">
  <span class="letters letters-1"> Welcome To       </span>
  <strong class="letter">        East Side Gaming! </strong>
 
</h1>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    
               <h1 className="brand-all">
              
               <strong className ="brand-name"> Gaming With knowledge </strong>


                   <h2 className="brand">
                   a gaming knowledge hub for all your quests
                   </h2>
               </h1>
              <div className="mt-5">
              
                  <NavLink to="/join" ><button className="button">Join Us Now</button></NavLink>
                  
                  </div>

              </div>
              <div className="col-lg order-1 order-lg-2 header-img">
<img src={web} className="img-fluid animated" alt="home img" />

              
              </div>
                </div>
            </div>
        </div>
    </div>

    

</section>

</>
    );
};

export default Home;
