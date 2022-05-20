
import React from 'react';
import { Link } from "react-router-dom"
const Header = () => {

    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/dashboard" className="nav-item nav-link" >Dashboad </Link>
                        <Link to="/readnow" className="nav-item nav-link" >Read Now </Link>
                        {localStorage.getItem('token') ?
                            <Link to="/" className="nav-item nav-link" >Logout </Link>
                            : null}
                    </div>
                </div>
                <Link to={'/dashboard'} className="navbar-brand">News Reader <i className="fa fa-newspaper-o fa-2"></i></Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>
    </>


}
export default Header;