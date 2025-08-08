export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed1",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]

    , contacts: [
        {
            "name": "Juan Pérez",
            "phone": "(555) 123-4567",
            "email": "juan.perez@email.com",
            "address": "Calle Falsa 123, Ciudad Imaginaria",
            "id": 28
        },
        {
            "name": "Ana García",
            "phone": " (555) 987-6543",
            "email": "ana.garcia@email.com",
            "address": " Avenida Siempre Viva 742, Pueblo Fantasía",
            "id": 29
        },
        {
            "name": "Carlos López",
            "phone": "(555) 246-8135",
            "email": "carlos.lopez@email.com",
            "address": "Pasaje Secreto 45, Villa Desconocida",
            "id": 30
        },
        {
            "name": "Sofía Rodríguez",
            "phone": "(555) 135-7924",
            "email": "sofia.rodriguez@email.com",
            "address": "Bulevar de los Sueños 101, Metrópolis Ficticia",
            "id": 31
        },
        {
            "name": "Miguel Torres",
            "phone": "(555) 864-2097",
            "email": "miguel.torres@email.com",
            "address": "Plaza de la Imaginación 50, Distrito Falso",
            "id": 32
        },
        {
            "name": "Valeria Fernández",
            "phone": "(555) 579-3180",
            "email": "valeria.fernandez@email.com",
            "address": "Camino de Nadie 88, Localidad Inventada",
            "id": 33
        }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
     case 'addContact':

       const { id,  color } = action.payload

       return {
         ...store,
         todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
       };

      case 'remove_contact':
        const { indexToDelete } = action.payload
         console.log('remove_contact'+ indexToDelete );

      return {
        ...store,
        contacts : store.contacts.filter((contacto,index)=> index != indexToDelete )
       
        
      };

       case 'load_contacts':
        const { initialContacts} = action.payload

      return {
        ...store,
        contacts : initialContacts
       
        
      };

    default:
      throw Error('Unknown action.');
  }    
}