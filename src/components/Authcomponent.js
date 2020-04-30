import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

//importing jwt function 
import { getjwt } from '../jwt/jwt'
import Login from './Login'

const baseUrl = "http://localhost:3000"

export class Authcomponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: undefined
        }
    }
    
    componentDidMount() {
        const jwt = getjwt();
        
        fetch(`${baseUrl}/ticket`, {
            method: "GET",
            headers: { Authorization: `jwt ${jwt}`}
        })
        .then(res => res.json())
        .then(data => 
            {if(data.code === "InvalidCredentials") {
            return undefined
        }
        else{
        this.setState({ user: data })
        }}
    )}

    render() {
        
        if(this.state.user === undefined) {
            return(
                <div>
                    <Login />
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
        
    }
}

export default withRouter(Authcomponent);
