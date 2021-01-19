import React, { useState } from "react";


const Contact =() =>{
    
    const [data,setData]= useState({
        name:"",
        email: "",
        sub: "",
        msg: "",
        
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
   alert(`Thank You ${data.name} your message has been recieved and will be reviewed soon`);
    };
    return(
<>
<div className="contact">
<div className="mb-5">
    <h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
        <div class="mb-5">
  <label for="exampleFormControlInput1" class="form-label">Your Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
    name="name"
    value={data.name}
    onChange={InputEvent}/>
</div>
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Your Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" 
    name="email"
    value={data.email}
    onChange={InputEvent}
  />

</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Subject </label>
  <input type="text" 
  class="form-control"
   id="exampleFormControlInput1" 
   name="sub"
   value={data.sub}
   onChange={InputEvent}
  />
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
    name="msg"
    value={data.msg}
    onChange={InputEvent}
    ></textarea>
</div>
<div class="col-12">
    <button class=" btn btn-outline-primary" type="submit">Submit Message</button>
  </div>
  </form>
        </div>
    </div>
</div>
</div>
</>
    );

};

export default Contact;
