import React, { Component } from 'react';
import Authcomponent from '../src/components/Authcomponent'
import Addrequest from '../src/components/Addrequest'
import Register from '../src/components/Register'
import Login from '../src/components/Login'
import Logout from '../src/components/Logout'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Protected from './components/Protected';

// const baseUrl = "http://localhost:3000"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
       email: "",
       password: "",
       ticketQue: []
     }
  }


  onChange = (e) => 
        this.setState({
            [e.target.name]: e.target.value
        });


  render(){
      return (
        <div className="App">
          <h2 style={header}>Partners Plea</h2>
          <BrowserRouter>
            <Switch>
              {/* can't be just a / */}
              <Route path="/Logout" component={Logout} />
              <Route path="/Login" component={Login}/>
              <Route path="/Register" component={Register}/>  
              <Authcomponent>
              <Route path="/Addrequest" component={Addrequest}/>
              </Authcomponent>
                
            </Switch>
          </BrowserRouter>
        </div>
      );
   
    
  }
  
}

const header = {
  textAlign: "center"
}

export default App;
