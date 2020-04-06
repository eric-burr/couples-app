import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

//importing jwt function 
// import { getjwt } from '../jwt/jwt'

// const baseUrl = "http://localhost:3000"

export class Authcomponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: undefined
        }
    }
    // componentDidMount() {
    //     const jwt = getjwt();
    //     if(!jwt) {
    //         this.props.history.push('/Register');
    //     }
    //     fetch(`${baseUrl}/auth`, {
    //         method: "GET",
    //         headers: {Authorization: `Bearer ${jwt}`}
    //     })
    //     .then(res => this.setState({
    //         user: res.data
    //     }))
    // }

    render() {
        if(this.state.user === undefined) {
            return(
                <div>
                    Loading..
                </div>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Authcomponent;
