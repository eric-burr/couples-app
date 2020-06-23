import React, { Component } from 'react'
import {Route, withRouter} from 'react-router-dom';
// import { element } from 'prop-types'
const baseUrl = "http://localhost:3000"

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }
    

    login =  (e) => {
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
        
        .then(data => {localStorage.setItem('the-jwt', data.token);
        const read = Object.values(data)
        console.log('read it', read[3])
        localStorage.setItem('userID', read[3])
        
        this.props.history.push('/Addrequest')
    })
    
        
    }
    toLogin = () => {
        this.props.history.push('/Register')
    }

    onChange = (e) => 
        this.setState({
            [e.target.name]: e.target.value
        });

    render() {
        return (
            <div style={authStyle}>
                <div style={memberIn}> 
                    <form style={form} onSubmit={this.login}>
                        <div style={one}>
                            Email
                            <input 
                            type="text" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.onChange} />
                        </div>
                         {/* <br /> */}
                         <div style={two}>
                            Password
                            <input 
                            type="password"
                            name="password" 
                            value={this.state.password} 
                            onChange={this.onChange} /> <br />
                            </div>
                        <div style={three}>
                            <button type="submit">Login</button>
                        </div>
                        

                    </form>
                        <h3 >Not a member?</h3>
                        <button onClick={this.toLogin} type="button">Create Account</button> 
                </div>
            </div>
        )
    }
}

const authStyle = {
    textAlign: "center",
}
const one = {
    backgroundColor: 'red'
}
const two = {
    backgroundColor: 'blue'
}
const three = {
    backgroundColor: 'green'
}

const form = {
    display: 'grid',
    gridTemplateRows: '5rem 5rem 5rem',
}
const memberIn = {
    position: 'absolute',
    left: '49%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
}


export default withRouter(Login)
