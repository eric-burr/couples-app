import React, { Component } from 'react'

export class Request extends Component {
   
    
    render() {
       
        return this.props.requests.map((element) => (
            
            <div style={theStyle} key={element._id} >
                <h2>{ element.title }</h2>
                <small>{ element.subject } </small>
            </div>
            
        ))
        
     }
}
const theStyle = {
    textAlign: "center",
    backgroundColor: "gray",
    padding: "15px"
}

export default Request
