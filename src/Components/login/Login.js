
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import newsService from '../../Services/news.service';

const Login = () => {
    const history = useHistory();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        localStorage.clear();
    });
    const loginSubmit = (e) => {
        e.preventDefault();
        const userData = { username, password };
        newsService.login(userData)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                newsService.authenticated(response.data.token).then(res=>{
                    if(res.data.isAuthenticated)
                    history.push('/dashboard');
                    else
                    console.log('UnAuthorized');
                })
            })
            .catch(err => console.log(err));
    }

    return (
        <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-12 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form>
                                            <h1 className="fw-normal mb-3 pb-3 text-center" style={{ letterSpacing: '1px' }}>Login</h1>

                                            <div className="form-outline mb-4">
                                                <label className="form-label">Username</label>
                                                <input type="text" id="form2Example17" className="form-control form-control-lg" placeholder="Enter your username"
                                                    onChange={(e) => { setUserName(e.target.value) }} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label">Password</label>
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder="Enter your password"
                                                    onChange={(e) => { setPassword(e.target.value) }} />
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={loginSubmit}>Login</button>
                                            </div>

                                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/register" >Register </Link>
                                            </p>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;