import * as React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

  return (
    <div className="container">
      <div className="text-center text-white">
        <img
          className="mb-4 rotate"
          src="assets/small-logo.png"
          alt="InstaLOD"
        />
        <p className="mainSubtitle">
          Does not have an account? <Link to="/signup">Sign up</Link>
        </p>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      </div>
      <div className="row">
        <div className="col-md" />
        <div className="col-md">
          <div className="text-left text-white">
            <label className="font-weight-bold">Email</label>
          </div>
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="col-md" />
      </div>

      <div className="row mt-4">
        <div className="col-md" />
        <div className="col-md">
          <div className="text-left text-white">
            <label className="font-weight-bold">Password</label>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <small id="passwordHelpInline" className="text-muted">
            Must be 8-20 characters long.
          </small>
        </div>
        <div className="col-md" />
      </div>

      <div className="row">
        <div className="col-md" />
        <div className="col-md">
          <div className="mt-4">
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
          </div>
        </div>
        <div className="col-md" />
      </div>
    </div>
  );
};
export default SignIn;
