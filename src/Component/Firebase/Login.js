import React from "react";
import UseFirebase from "./UseFirebase";
import "./Login.css";
import useAuth from "./UseAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const { singInUsingGoogle, user } = useAuth();
  return (
    <div className="nav-manage">
      {user?.email ? (
        <div>
          <h3 className="text-success mt-4 shadow-lg p-5 w-100 ">
            <i>You are Sign in successfully</i>
          </h3>
          <Link to="/home">
            <button className="btn btn-warning mt-5 mb-5">
              <i class="fab fa-google text-primary fs-4 pe-3"></i>
              <span></span>
              Back to home
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h3 className="text-danger mt-4 shadow-lg p-5 w-100 ">
            <i>
              If you want to booking the tour event <br />
              first of all to your have to sing in login this website
            </i>
          </h3>
          <Link to="/login">
            <button
              onClick={singInUsingGoogle}
              className="btn btn-warning mt-5 mb-5"
            >
              <i class="fab fa-google text-primary fs-4 pe-3"></i>
              <span></span>
              Please Login
            </button>
          </Link>
        </div>
      )}
      {/* <h3 className="text-danger mt-4 shadow-lg p-5 w-100 ">
        <i>
          If you want to booking the tour event <br />
          first of all to your have to sing in login this website
        </i>
      </h3>
      <button onClick={singInUsingGoogle} className="btn btn-warning mt-4">
        <i class="fab fa-google text-primary fs-4 pe-3"></i>
        <span></span>
        Please Login
      </button> */}
    </div>
  );
};

export default Login;
