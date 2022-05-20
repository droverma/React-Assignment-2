import React, { Component } from "react";
import { Redirect, Route, Switch,withRouter} from "react-router-dom";
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Dashboard from './Components/dashboard/Dashboard';
import ReadNow from './Components/readNow/ReadNow';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import ProtectedRoute from './ProtectedRoute';
class AppRoute extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                 <Switch>
                    <Route path="/" exact component={Login} />
                    <ProtectedRoute path="/dashboard" component={Dashboard} />
                    <ProtectedRoute path="/readnow" component={ReadNow} />
                   
                    <Route path="/dashboard" component={Dashboard} />
                     <Route
                        path="/register"
                        render={(props) => <Register {...props} />}
                    />      
                    <Route path="*">
                        <Redirect from="/" to="" />
                    </Route>
                </Switch>
                <Footer/>
            </React.Fragment>
        );
    }
}
export default withRouter(AppRoute);
