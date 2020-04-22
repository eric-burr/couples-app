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
        this.props.history.push('/Login')
    };

    onChange = (e) => 
        this.setState({
            [e.target.name]: e.target.value
        });

        render() {
            return (
                <div style={theStyle}>
                    <form onSubmit={this.register}> 
                        Email
                        <input style={inputStyle} type="email" name="email" value={this.state.email} onChange={this.onChange}/> <br />
                        Password
                        <input style={inputStyle} type="password" name="password" value={this.state.password} onChange={this.onChange} /> <br />
                        <button style={inputStyle} type="submit">Create Profile</button>
                    </form>
                    <div> <br />
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




export default Register
