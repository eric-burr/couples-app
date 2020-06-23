import React, { Component } from 'react'
import '../App.css'
import {Route, withRouter} from 'react-router-dom';
// import { getjwt } from '../jwt/jwt'

const baseUrl = "http://localhost:3000"

export class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            emailRegister: "",
            passwordRegister: "",
            passwordRegisterConfirm: "",
            ticketQue: [],
            toggle: true,
            name: "",
            emailSignin: "",
            passwordSignin: ""
        }
    }
   
    register = (e) => {
        e.preventDefault();
        const body = {
            email: this.state.emailSignin,
            password: this.state.passwordSignin
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
        
        signup = () => {
            console.log('stuff')
            this.setState({ toggle: !this.state.toggle })
        }
        signin = () => {
            console.log('singin')
            this.setState({  toggle: !this.state.toggle })
        }
        signintwo = () => {
            this.setState({ toggle: !this.state.toggle })
        }
        signuptwo = () => {
            this.setState({ toggle: !this.state.toggle})
        }
        

        render() {
            return (
                <div className='body'>

                    <div className='container'>
                        <div className='frame'>
                            {this.state.toggle ? 
                            <div>
                            <div className='nav'>
                                <ul className='links'>
                                    <li className='signin-active'>
                                        <a className='btn' onClick={this.signin}>Sign in</a>
                                    </li>
                                    <li className='signup-inactive'>
                                        <a className='btn' onClick={this.signup}>Sign up</a>
                                    </li>
                                </ul>
                            </div>
                            <form onSubmit={this.register} className="form-signin">
                                <label htmlFor="email">Email</label>
                                <input autoComplete='off' className="form-styling" onChange={this.onChange} value={this.state.emailSignin} type="email" name="email" placeholder=""/>

                                <label htmlFor="password">Password</label>
                                <input autoComplete='off' className="form-styling" value={this.state.passwordSignin} onChange={this.onChange} type="text" name="password" placeholder=""/>

                                <input type="checkbox" id="checkbox"/>
                                <label htmlFor="checkbox" ><span className="ui"></span>Keep me signed in</label>

                                <button type='submit' className="btn-signup">Sign in
                                </button>
                            </form>
                            </div>
                            :
                            <div>
                             <div className='nav'>
                                <ul className='links'>
                                    <li className='signin-inactive'>
                                        <a className='btn' onClick={this.signintwo}>Sign in</a>
                                    </li>
                                    <li className='signup-active'>
                                        <a className='btn' onClick={this.signuptwo}>Sign up</a>
                                    </li>
                                </ul>
                            </div>
                            <form onSubmit={this.register} className='form-signup'>
                                <label htmlFor="fullname">Full name</label>
                                <input onChange={this.onChange}  value={this.state.name} className="form-styling" type="text" name="fullname" placeholder=""/>
                                <label htmlFor="email">Email</label>
                                <input onChange={this.onChange}  value={this.state.emailRegister} className="form-styling" type="text" name="email" placeholder=""/>

                                <label htmlFor="password">Password</label>
                                <input onChange={this.onChange}  value={this.state.passwordRegister} className="form-styling" type="text" name="password" placeholder=""/>

                                <label htmlFor="confirmpassword">Confirm password</label>
                                <input onChange={this.onChange}  value={this.state.passwordRegisterConfirm} className="form-styling" type="text" name="confirmpassword" placeholder=""/>
                                <button type='submit' className='btn-signup'>Sign In</button>
                                {/* <a ng-click="checked = !checked" className="btn-signup">Sign Up</a> */}
                            </form> 
                            </div>}

                        </div>
                    </div>

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
