// Import necessary components from react-router-dom and other parts of the application.
import { Link , useParams} from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";

export const EditContact = () => {
 const { editId} = useParams()

    const [editName, seteditName] = useState('')
    const [editPhone, seteditPhone] = useState('')
    const [editEmail, seteditEmail] = useState('')
    const [editAddress, seteditAddress] = useState('')

  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  
   function editContact(item){

       const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

const raw = JSON.stringify({
  "name": editName,
  "phone": editPhone,
  "email": editEmail,
  "address": editAddress
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://playground.4geeks.com/contact/agendas/jesus_agenda/contacts/" + editId, requestOptions)
  .then((response) => response.text())
        seteditName('')
        seteditPhone('')
        seteditEmail('')
       seteditAddress('')
        
       }
         
  return (
    <div className="container">
     
       <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
        <input type="text" value={editName} onChange={(e) => seteditName(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
        </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email</label>
        <input type="text" value={editPhone} onChange={(e) =>seteditPhone(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Email"/>
        </div>

        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Phone</label>
        <input type="text" value={editEmail} onChange={(e) => seteditEmail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone"/>
        </div>

        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Address</label>
        <input type="text" value={editAddress} onChange={(e) => seteditAddress(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Address"/>
        </div>

      <button className="btn btn-success" onClick={editContact}> Save </button>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
