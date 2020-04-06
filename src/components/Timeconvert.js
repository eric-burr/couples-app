import React, { Component } from 'react'

export class Timeconvert extends Component {
        state = {
            dateFormat: ""
        }
        componentDidMount() {
            this.props.requests.forEach((element, index) => {
                console.log("element in render", element.createdAt)
    
                const dateish = new Date("2020-03-26T17:59:53.508Z")
            console.log('dateish', dateish)
                this.setState({ dateFormat: dateish })
            }
            )
    
            // console.log(this.props.requests)
            // const dateish = new Date(this.props.requests.createdAt)
            // console.log('dateish', dateish)
        }
   
    render() {
        console.log('jdsfka;dj', this.props.requests)
        // console.log('thisstatedateformat', this.state.dateFormat)
        return (
            <div>
                Christmas
                {/* I think this is a datatype issue
                won't display formatted date 
                in this state */}
                
                {/* {this.state.dateFormat} */}
            </div>
        )
    }
}

export default Timeconvert
