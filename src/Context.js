import React,{Component}from 'react';
import axios from 'axios';
import Contact from './component/Contacts/Contact';
//import Contact from './component/Contacts/Contact';
const Context = React.createContext();
const reducer =(state,action) =>{
    switch(action.type){

     case 'DELETE_CONTACT':
         return{
             ...state,
             contacts:state.contacts.filter(Contact=>Contact.id !==action.payload)
         };
         case 'ADD_CONTACT':
            return{
                ...state,
                contacts:[action.payload,...state.contacts] 
            };
            case 'UPDATE_CONTACT':
                return {
                  ...state,
                  contacts: state.contacts.map(
                    contact =>
                      contact.id === action.payload.id
                        ? (contact = action.payload)
                        : contact
                  )
                };
              default:
                return state;
    }
};

export class Provider extends Component{
    state ={
        contacts:[
           
            /*{
                id:1,
                name:'Harsimran',
                email:'Harryhar89@gmail.com',
                Phone:'0221669411'
   
            },
            {
               id:2,
               name:'Ravi',
               email:'Ravi@gmail.com',
               Phone:'0622922345'
  
           },
           {
               id:3,
               name:'Naveen',
               email:'Naveen@gmail.com',
               Phone:'09463393022'
  
           },*/
          
        ],
        dispatch:action => {this.setState(state => reducer(state, action))}

       }
      async componentDidMount() {
          const res = await axios.get('https://jsonplaceholder.typicode.com/users').then(res=>this.setState({contacts:res.data}));
       }
       render()
     {
        return (
        <Context.Provider value = {this.state}>
            {this.props.children}
        </Context.Provider>
        )}
}
export const Consumer  = Context.Consumer;