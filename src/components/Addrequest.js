import React, { Component } from 'react'
//to make requests with jwt access this needs to be important to be used in post fetch
import { getjwt, getID } from '../jwt/jwt'
import Logout from './Logout'

const baseUrl = "http://localhost:3000"

export class Addrequest extends Component {
    state = {
        clicked: false,
        subject: "",
        title: "",
        ticket: []
    }

    view = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    
    
    componentDidMount() {
        const jwt = getjwt();
        const id = getID();
        console.log('the id', id)
        fetch(`${baseUrl}/ticket/${id}`, {
            method: 'GET',
            // body: `${this.props.id}`,
            headers: {'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": 'http://localhost:3001', 
            Authorization: `jwt ${jwt}`}
        })
        .then(res => res.json())
        // .then(data => console.log('tell me', data))
        .then(data => this.setState({ ticket: data }))
    }

    createRequest = (e) => {
        // const token = localStorage.getItem('the-jwt', ${jwt})
        e.preventDefault();
        //
        const id = getID();
        const jwt = getjwt();
        console.log('the jwt is', jwt)
        const body = {
            title: this.state.title,
            subject: this.state.subject,
            userID: id
        }
        fetch(`${baseUrl}/ticket`, {
            method: "POST",
            //where we use authorization as a header with the jwt
            headers: {'Content-Type': 'application/json', 
            "Access-Control-Allow-Origin": 'http://localhost:3001',
            Authorization: `jwt ${jwt}`},
            body: JSON.stringify(body)
        })
        .then(window.location.reload());
    }

    onChange = (e) => 
        this.setState({
            [e.target.name]: e.target.value
        });
        
        complete = (stuff) => {
            console.log('stuff', stuff)
            const jwt = getjwt();
            fetch(`${baseUrl}/ticket`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json', Authorization: `jwt ${jwt}`, 
            "Access-Control-Allow-Origin": 'http://localhost:3001',},
            body: JSON.stringify(stuff),
            })
        }
    
    render() {
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
                    <Logout />
                    <button onClick={this.view}>Create Request</button>

                    <h1>Tickets in Que</h1>
                    <div>{this.state.ticket.map((item, index) => 
                        <div key={index}>
                            <h4>Title: {item.title}</h4>
                            <small>subject: {item.subject}</small>
                            <div>Time Due: {item.createdAt}</div>
                            <div>user id: {item.userID}</div>
                            <button type='submit' onClick={()=>{this.complete(item)}}>Done</button>
                        </div>
                        )}
                    </div>
                    
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
