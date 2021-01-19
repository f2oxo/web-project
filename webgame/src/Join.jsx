import react from "react";

import React, { useState } from "react";


const Join =() =>{
    
    const [data,setData]= useState({
        
        email: "",
        
        
    });

    const InputEvent =(event) =>{
        const {name,value}=event.target;
    setData((preVal)=>{
        return{
            ...preVal,
            [name]: value,
        };
    });
    };

    const formSubmit = (e) =>{
       
   e.preventDefault();
   alert(`Thank You ${data.email} for subscribing to eastside gamer`);
    };
    return(
<>
<section className="join-1">


<div className="my-5">
    <h1 className="text-center">Join Us</h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Your E-mail</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
    name="email"
    value={data.email}
    onChange={InputEvent}/>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Subscribe</button>
  </div>
</form>
        </div>
    </div>
</div>


</section>
</>
    );

};
export default Join;