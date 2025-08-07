import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
   
  const {store, dispatch} =useGlobalReducer()

    function listContacts(){
      fetch('https://playground.4geeks.com/contact/agendas/jesus_agenda/contacts')
        .then((response)=> response.json())
        .then((data)=> {
          dispatch({
          type:'load_contacts',
          payload:{initialContacts : data.contacts}
        })
      })
    }

   function deleteContact(index){
        const requestOptions = {
         method: "DELETE",
        redirect: "follow"
        };
        fetch("https://playground.4geeks.com/contact/agendas/jesus_agenda/contacts/" + index, requestOptions)
        .then((response) => response.text())
        .then((result) => { 
          console.log(result)
          listContacts()
        }
      )
    // dispatch({
    //   type:'remove_contact',
    //   payload:{indexToDelete : index}

    // })
  }

  useEffect(()=>{
    listContacts()
    },[])

	return (
		<div className="container">
	<h2>Contactos:</h2>
          <ul className="list-group">
        {/* Map over the 'todos' array from the store and render each item as a list element */}
        {store && store.contacts?.map((item) => {
          return (
            <li
              key={item.id}  // React key for list items.
              className="list-group-item d-flex justify-content-between"> 
              {/* Link to the detail page of this todo. */}
              <div>
                <p>{item.name}</p>
                <p>{item.phone}</p>
                <p>{item.email}</p>
                <p>{item.address}</p>
                <p>{item.id}</p>
             
              </div>
              <button className="btn btn-danger" onClick={()=>deleteContact(item.id)}>Eliminar</button>
            </li>
          );
        })}
      </ul>

		
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 