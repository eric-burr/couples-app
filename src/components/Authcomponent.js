import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

//importing jwt function 
import { getjwt } from '../jwt/jwt'

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
        console.log('one', jwt)
        if(jwt === undefined) {
            console.log('two')
            this.props.history.push('/Addrequest');
        }
        fetch(`${baseUrl}/ticket`, {
            method: "GET",
            headers: {Authorization: `jwt ${jwt}`}
        })
        .then(res => res.json())
        // .then(data=>console.log('this is', data))
        .then(data => 
            {if(data.code === "InvalidCredentials") {
            console.log('three' )
            return undefined
        }
    else{
        console.log('four')
        this.setState({ user: data })
    }}
    )
        // .then(data => this.setState({ user: data }))
        
    }

    render() {
        console.log('state of user is', this.state.user)
        if(this.state.user === undefined) {
            return(
                <div>
                    Loading..
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
