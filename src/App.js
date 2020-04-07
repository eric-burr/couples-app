import React, { Component } from 'react';
import Authcomponent from '../src/components/Authcomponent'
import Request from '../src/components/Request'
import Addrequest from '../src/components/Addrequest'
import Register from '../src/components/Register'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Protected from './components/Protected';

const baseUrl = "http://localhost:3000"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      requests: [
         {
           id: 1,
           title: "chore",
           body: "take out the trash"
         },
         {
           id: 2,
           title: "task", 
           body: "take civic in for an oil change"
         }
       ],
   
       view: false,
       email: "",
       password: "",
       ticketQue: []
     }
  }

  componentDidMount() {
    fetch(`${baseUrl}/ticket`, {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => this.setState({ ticketQue: data }))
}
  

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
              <Route path="/Register" component={Register}/>  
              <Authcomponent>
              <Route path="/Protected" component={Protected}/>
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
          <Addrequest />
          
      </div>
      )
      
    }
    
  }
  
}


export default App;
