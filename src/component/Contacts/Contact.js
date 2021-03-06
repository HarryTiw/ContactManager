import React, { Component } from 'react'
import propTypes from 'prop-types';
//import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Consumer}from '../../Context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
     state = {showContactInfo:false};
     onshowClick = e =>{
         this.setState({showContactInfo:!this.state.showContactInfo});
     };
     onDeleteClick = async(id, dispatch)=>{
         try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>dispatch({type:'DELETE_CONTACT',payload:id}));
         }
         catch(e){
        dispatch({type:'DELETE_CONTACT',payload:id})
         }
     };
    render() {
        const{id,name,phone,email} = this.props.contact;
        const{showContactInfo} = this.state;
        return (
            <Consumer>
                {value=>{
                    const{dispatch}=value;
                    return(
                        <div className = "card card-body mb-3">
                            <h4>
                                {name}{''}
                                <i onClick={()=>
                                 this.setState({showContactInfo:!this.state.showContactInfo})
                                } 
                               
                                className="fas fa-sort-down" style = {{cursor:'pointer'}}/>
                                 <i className="fas fa-trash" style = {{cursor:'pointer',float:'right',color:'red'}} 
                onClick = {this.onDeleteClick.bind(this,id,dispatch)}/>

    
                 <Link to={`contact/edit/${id}`}>
                  <i className ="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
               </h4>
                
               {showContactInfo ?(
                <ul className = "list-group">
                    <li className = "list-group-item">Email:{email}</li>
                    <li className = "list-group-item">Phone:{phone}</li>
                </ul>
               ):null}
            </div>
               
            );  
               }
            }
            </Consumer> 
        );
            
    }
}
 
export default Contact;
Contact.propTypes  = {contact:propTypes.object.isRequired};