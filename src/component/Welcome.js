import React, { Component } from 'react'
import { connect } from 'react-redux'


const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
export class Welcome extends Component {
    
    render() {
      
        return (
            <div>
            Hoşgeldin {user.name}
            </div>
        )
    }
}
export default Welcome;
