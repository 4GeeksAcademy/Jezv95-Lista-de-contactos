// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";

export const Demo = () => {


    const [inputName, setInputName] = useState('')
    const [inputPhone, setinputPhone] = useState('')
    const [inputEmail, setinputEmail] = useState('')
    const [inputAddress, setinputAddress] = useState('')

  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  
   function addContact(){

        const requestOptions={
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                     "name": inputName,
                     "phone": inputPhone,
                      "email": inputEmail,
                      "address": inputAddress,
                })
        };
        fetch('https://playground.4geeks.com/contact/agendas/jesus_agenda/contacts', requestOptions)
        .then((response)=> response.json())
        setInputName('')
        console.log('addcontact');
        
       }
         
  return (
    <div className="container">
     
       <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
        <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
        </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email</label>
        <input type="text" value={inputPhone} onChange={(e) => setinputPhone(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Email"/>
        </div>

        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Phone</label>
        <input type="text" value={inputEmail} onChange={(e) => setinputEmail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone"/>
        </div>

        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Address</label>
        <input type="text" value={inputAddress} onChange={(e) => setinputAddress(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Address"/>
        </div>

      <button className="btn btn-success" onClick={addContact}> Save </button>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
