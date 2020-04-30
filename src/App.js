import React, { Component } from 'react';
import Authcomponent from '../src/components/Authcomponent'
import Request from '../src/components/Request'
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
       view: false,
       email: "",
       password: "",
       ticketQue: []
     }
  }

//   componentDidMount() {
//     fetch(`${baseUrl}/ticket`, {
//         method: "GET",
//         headers: {'Content-Type': 'application/json'}
//     })
//     .then(res => res.json())
//     .then(data => this.setState({ ticketQue: data }))
// }
  

  onChange = (e) => 
        this.setState({
            [e.target.name]: e.target.value
        });

  toggle = () => {
    this.setState({
      view: !this.state.view
    })
  }

  render(){
    if(!this.state.view) {
      return (
        <div className="App">
          <button onClick={this.toggle}>Toggle</button>
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
    } else {
      return(
        <div>
        Ticket App
          <button onClick={this.toggle}>Toggle</button>
          <Request requests={this.state.ticketQue}/>
          {/* <Addrequest /> */}
          
      </div>
      )
      
    }
    
  }
  
}


export default App;
