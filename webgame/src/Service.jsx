import React from "react";
import { map } from "map";
import Card from "./Card";
import Imgdata from "./Imgdata";


const Service =() =>{
    return(
<div className="review">
<div className="my-5">
    <h1 className="text-center"> 
Game Reviews
    </h1>
</div>
<div className="container-fluid mb-5">
    <div className="row">
        <div className="col-10 mx-auto">
            <div className='row gy-4'>
            
            
                {
                   Imgdata.map((val,ind) => {
                        return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    desc={val.desc}
                    link={val.link}
                    /> 
                })
                    
                }
                
                
                </div>
 
                </div>
</div>

                </div>
                
                
     </div>   

    );
};

export default Service;
