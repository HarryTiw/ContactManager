import React, { Component } from 'react'
import Contact from './Contact'
//import PropTypes from 'prop-types'
import {Consumer} from '../../Context';

 class Contacts extends Component { 
        
        
    render()
     {
         return(
        <Consumer>
        {value=>{
        const {contacts} = value;
        return (
            <React.Fragment>
            <div>
                {contacts.map(contact =>(
                    <Contact key = {contact.id} contact = {contact}/>  
        ))}
                 
            </div>
            </React.Fragment>
    
        );  
    }}
    </Consumer> 
    );
                
    }
 }
export default Contacts;
