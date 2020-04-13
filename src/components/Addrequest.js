import React, { Component } from 'react'
//to make requests with jwt access this needs to be important to be used in post fetch
import { getjwt } from '../jwt/jwt'
const baseUrl = "http://localhost:3000"

export class Addrequest extends Component {
    state = {
        clicked: false,
        subject: "",
        title: ""
    }

    view = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    componentDidMount() {
        const jwt = getjwt();
        fetch(`${baseUrl}/user`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": 'http://localhost:3001', Authorization: `jwt ${jwt}`}
        })
        .then(res => res.json())
        .then(data => console.log('user id i need', data))
    }

    createRequest = (e) => {
        // const token = localStorage.getItem('the-jwt', ${jwt})
        e.preventDefault();
        //

        const jwt = getjwt();
        console.log('the jwt is', jwt)
        const body = {
            title: this.state.title,
            subject: this.state.subject,
            id: this.state._id
        }
        fetch(`${baseUrl}/ticket`, {
            method: "POST",
            //where we use authorization as a header with the jwt
            headers: {'Content-Type': 'application/json', Authorization: `jwt ${jwt}`},
            body: JSON.stringify(body)
        })

    }

    onChange = (e) => 
        this.setState({
            [e.target.name]: e.target.value
        });
    
    render() {
        console.log('cornoavirus', this.props.id)
        if(this.state.clicked) {
            return (
                <div style={theStyle}>
                    <button onClick={this.view}>Create Request</button>
                    <form onSubmit={this.createRequest}>
                        Type

                    {/* value = state and onchange are taken care of in the select target
                        not the option's tag (which makes sense, because if there were more than 7 
                        option tags it would be very annoying!) */}

                        <select name="title" value={this.state.title} onChange={this.onChange}> 
                            <option></option>
                            <option name="Chore">Chore</option>
                            <option name="Task">Task</option>
                        </select> <br />
                        Body
                        <textarea style={inputStyle} name="subject" onChange={this.onChange}
                        value={this.state.subject}/>
                        <button type="submit">Send</button>
                    </form>
                    
                </div>
            )
        } else {
            return(
                <div style={theStyle}>
                    <button onClick={this.view}>Create Request</button>
                </div>
            )
        }
        
    }
}

const theStyle = {
    textAlign: "center",
    backgroundColor: "pink",
    padding: "15px"

}
const inputStyle = {
    height: "25vh",
    width: "35vw"
}

export default Addrequest
