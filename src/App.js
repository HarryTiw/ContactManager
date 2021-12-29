
import React from "react"; 
import Header from "./component/layout/Header";
import Contacts from "./component/Contacts/Contacts";
import {Provider} from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact  from "./component/Contacts/AddContact";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from  "./component/Pages/About";
import NotFound from "./component/Pages/NotFound";
import Test from "./component/test/Test";
import EditContact from "./component/Contacts/EditContact";

function App() { 
return (
  <Provider>
    <Router>
  <div className="App">
    <Header branding="contactmanager"/>
    <div className = "Container">
      <Switch>
                <Route exact  path="/" component={Contacts} />
                <Route exact  path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact component={NotFound} />
      </Switch>
    
      </div>
  </div>
  </Router>
  </Provider>
   );
}

export default App;