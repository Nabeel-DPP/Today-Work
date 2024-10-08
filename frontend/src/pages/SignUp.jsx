import React from 'react'
import { Link } from 'react-router-dom'
import "../TableForm.css";
export const SignUp = () => {
  return (
    <div>
         
         <body className="bg-light-gray border-4" id="body">
          <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
          <div className="d-flex flex-column justify-content-between ">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-xl-5 col-md-10">
                <div className="card card-default mb-0 form-container">
                  <div className="card-header pb-0">
                    <div className="app-brand w-100 d-flex justify-content-center border-bottom-0">
                      <a className="w-auto pl-0" href="/index.html">
                        <img src="images/logo.png" style={{height:"50px"}}  alt="RAAZEE"/>
                        <span className="brand-name form-head text-dark">InfoSys</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-body px-5 pb-5 pt-0">
                    <h4 className="text-dark text-center mb-5">Sign Up</h4>
                    <form action="/index.html">
                      <div className="row">
                        <div className="form-group col-md-12 mb-4">
                          <input type="text" className="form-control input-lg" id="name" aria-describedby="nameHelp" placeholder="Name"/>
                        </div>
                        <div className="form-group col-md-12 mb-4">
                          <input type="email" className="form-control input-lg" id="email" aria-describedby="emailHelp" placeholder="Username"/>
                        </div>
                        <div className="form-group col-md-12 ">
                          <input type="password" className="form-control input-lg" id="password" placeholder="Password"/>
                        </div>
                        <div className="form-group col-md-12 ">
                          <input type="password" className="form-control input-lg" id="cpassword" placeholder="Confirm Password"/>
                        </div>
                        <div className="col-md-12">
                          <div className="d-flex justify-content-between mb-3">

                            <div className="custom-control custom-checkbox mr-3 mb-3">
                              <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                              <label className="custom-control-label" for="customCheck2">I Agree the terms and conditions.</label>
                            </div>

                          </div>

                          <button type="submit" className="btn btn-blue mb-4 btn-pill">Sign Up</button>

                          <p>Already have an account?
                         <Link to="/login" className="form-blue-text" >Login</Link>
                          </p>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



</body>


    </div>
  )
}
