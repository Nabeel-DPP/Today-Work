import React from 'react'
import { Link } from 'react-router-dom'
export const Reset = () => {
  return (
    <div>
         <body class="bg-light-gray" id="body">
          <div class="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
          <div class="d-flex flex-column justify-content-between">
            <div class="row justify-content-center mt-5">
              <div class="col-md-10">
                <div class="card card-default">
                  <div class="card-header">
                    <div class="app-brand w-100 d-flex justify-content-center border-bottom-0">
                      <a class="w-auto pl-0" href="/index.html">
                        <img src="images/logo.png" alt="Mono"/>
                        <span class="brand-name text-dark">RAAZEE</span>
                      </a>
                    </div>
                  </div>
                  <div class="card-body p-5">
                    <h4 class="text-dark mb-5">Reset Your Password</h4>
                    <form action="/index.html">
                      <div class="row">
                        <div class="form-group col-md-12 mb-4">
                          <input type="email" class="form-control input-lg" id="name" aria-describedby="nameHelp" placeholder="Email"/>
                        </div>

                        <div class="col-md-12">
                          <button type="submit" class="btn btn-primary btn-pill mb-4">Submit</button>

                          <p>Already have an account?
                            <a class="text-blue"><Link to="/login"  >Login </Link>   </a>
                            
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
