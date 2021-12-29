import React, { Component } from 'react';
import {Consumer} from '../../Context';
import axios from 'axios';
import TextInputGroup from '../layout/TextInputGroup';


class Addcontact extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        error:{}
    }
    onSubmit= async (dispatch,e)=>{
        e.preventDefault();
        const {name,email,phone}=this.state;
        //Check for Errors
        if(name===''){
            this.setState({error:{name:'Name is required'}});
            return;
        }
        if(email===''){
            this.setState({error:{email:'Email is required'}});
            return;
        }
        if(phone===''){
            this.setState({error:{phone:'Phone is required'}});
            return;
        }

        const newContact = {

     
        name,
        email,
        phone
    };
        const res = axios.post( 'https://jsonplaceholder.typicode.com/users',newContact).then(res=>
        dispatch({type:'ADD_CONTACT',payload:res.data}))

        this.setState({
            name:'',
            email:'',
            phone:'',
            error:{}

        });
        this.props.history.push('/');
    };
    onChange=e=>this.setState({[e.target.name]:e.target.value});
    render() {
        const{name ,email,phone,error}=this.state;

        return(
        
        <Consumer>
            {
                value=> {const{dispatch}=value;
            
        
        return (
            <div className="card mb-3">
             <div className="card-header">
              Addcontact  </div>
              <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                      <TextInputGroup
                      label = "Name"
                      name = "name"
                      placeholder = "Entername"
                      value = {name}
                      onChange = {this.onChange}
                      error={error.name}/>
                       <TextInputGroup
                      label = "Email"
                      name = "email"
                      placeholder = "Enteremail"
                      value = {email}
                      onChange = {this.onChange}
                      error={error.email}/>
                       <TextInputGroup
                      label = "Phone"
                      name = "phone"
                      placeholder = "Enterphoneno"
                      value = {phone}
                      onChange = {this.onChange}
                      error={error.phone}/>
                  <input type="submit" value="Add contact"
                  className="btn btn-block bt-light"/>
                  </form>
                  </div>
                  </div>
        );
    }
    }
    </Consumer>
        );
}
}
export default  Addcontact;