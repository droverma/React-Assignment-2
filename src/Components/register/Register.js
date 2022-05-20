

import React from 'react';
const Register = () => {
  return (
    <section style={{ backgroundColor: '#9A616D' }}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-12 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <h1 className="fw-normal mb-3 pb-3 text-center" style={{ letterSpacing: '1px' }}>Register</h1>
                      <div className="form-outline mb-4">
                        <label className="form-label" >Name</label>
                        <input type="text" id="form2Example17" className="form-control form-control-lg" placeholder="Enter your name"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" >Mobile</label>
                        <input type="text" id="form2Example17" className="form-control form-control-lg" placeholder="Enter your mobile"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" >Email</label>
                        <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder="Enter your email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" >Password</label>
                        <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder="Enter your password"
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Register</button>
                      </div>



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
export default Register;