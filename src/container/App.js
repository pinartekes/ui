import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navi from "../component/Navi/Navi";
import SecuredRoute from "../libs/SecuredRoute";
import { SET_CURRENT_USER } from "../store/actions/actionTypes";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";




import Signin  from "../component/Auth/Signin";
import Signup  from "../component/Auth/Signup";
import Signout  from "../component/Auth/Signout";
import Landing  from "../component/Landing";
import configureStore from "../store/reducers/configureStore";


import jwt_decode from "jwt-decode";
import setJWTToken from "../libs/SetJWTToken";

import { logout } from "../store/actions/securityActions";
import UserList from "../component/Users/UserList";
import { Welcome } from "../component/Welcome";

const store = configureStore();
const jwtToken = localStorage.getItem('token');
console.log(jwtToken);

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
  return (
    <Provider store={store}>
    <Router>
    <div>
      <Navi />
      <Container fluid>

        <Route exact path="/" component={Landing} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />

        <Switch> 
        <SecuredRoute exact path="/home" component={Welcome} />
        <SecuredRoute exact path="/users" component={UserList} />
        <SecuredRoute exact path="/signout" component={Signout} />
        </Switch>


      </Container>
    </div>
    </Router>
      </Provider>
  );
}
}

export default App;