import React, { Component } from 'react'
import Timeconvert from '../components/Timeconvert'
// import { getjwt } from '../jwt/jwt'


// import PropTypes from 'prop-types';
const baseUrl = "http://localhost:3000"

export class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            view: false,
            ticketQue: [],
        }
    }
   
    register = (e) => {
        e.preventDefault();
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        fetch(`${baseUrl}/register`, {
            method: "POST",
            //info about the returned data, in this case, json
            headers: {'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": 'http://localhost:3001'},
            body: JSON.stringify(body)
        });
        // .then(res => res.json());
    };

    


//authenticate path
    login = (e) => {
        e.preventDefault();
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        console.log('body', body)
        fetch(`${baseUrl}/auth`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        //data is the object being sent back
        //it has 3 fields
        //access by .token to get the token
        .then(data => {localStorage.setItem('get-jwt', data.token)})
        // this.props.history.push('/Protected')
    }



    onChange = (e) => 
        this.setState({
            [e.target.name]: e.target.value
        });

        view = () => {
            this.setState({
                view: !this.state.view
            })
        }
               
    render() {
        
        
        if(!this.state.view) {
            return (
                <div style={theStyle}>
                    <button type="button" onClick={this.view}>Login</button>
                    <form onSubmit={this.register}> 
                        Email
                        <input style={inputStyle} type="email" name="email" value={this.state.email} onChange={this.onChange}/> <br />
                        Password
                        <input style={inputStyle} type="password" name="password" value={this.state.password} onChange={this.onChange} /> <br />
                        <button style={inputStyle} type="submit">Create Profile</button>
                    </form>
                    <div>ticketque <br />
                        {this.state.ticketQue.map((element, index) => (
                            <div key={index}>
                                <ul>
                                    <li>{element.title}</li>
                                    <li>{element.subject}</li>
                                    <small>{element.createdAt}</small>
                                    <li><Timeconvert ticket={this.state.ticketQue}/></li>
                                    {console.log('wat is ticketque in map function', this.state.ticketQue)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )
        } else {
            //form to go to authenticate route
            return (
                <div style={theStyle}>
                    {/* <button type="button" onClick={this.view}></button> */}
                    <form onSubmit={this.login}>
                        Email
                        <input style={authStyle} 
                        type="text" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.onChange} /> <br />
                        Password
                        <input style={authStyle} 
                        type="password"
                         name="password" 
                         value={this.state.password} 
                         onChange={this.onChange} /> <br />
                        <button style={authStyle} type="submit">Login</button>
                    </form>
                </div>
            )
        }
        
    }
}

const theStyle={
    textAlign: "center",
    paddingTop: "20vh",
    fontSize: "5vh",
}
const inputStyle={
    height: "5vh",
    fontSize: "4vh"
}
const authStyle = {
    textAlign: "left",
    borderColor: "red",
    backgroundColor: "orange"
}



export default Register
