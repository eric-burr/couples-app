import React, { Component } from 'react'
import Timeconvert from './Timeconvert'

export class Request extends Component {
   
    render() {
       
        return this.props.requests.map((element) => (
            
            <div style={theStyle} key={element._id} >
                <h2>{ element.title }</h2>
                <small>{ element.subject } </small>
                <Timeconvert requests={this.props.requests}/>
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
