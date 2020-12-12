import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logout} from '../../store/actions/securityActions';


class Signout extends Component {
    componentDidMount() {
        this.props.logout();
      }
    
    render() {
        return <div>Sorry to see you go</div>;
    }
}
const mapDispatchToProps = {logout};
export default connect(null, mapDispatchToProps)(Signout)