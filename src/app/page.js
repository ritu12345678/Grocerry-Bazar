"use client";
import React from "react";
import Image from "next/image";
import LoginForm from "./login/components/LoginForm";

import loginPageImage  from  '../assets/images/login-page-image.png'

function Login() {
  return (
    <div className="login-wrapper h-100 d-flex align-items-center">
      <div className="">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <div className="left-section">
            
              <h2 className="mt-5">
                Welcome to{" "}
                <span className="text-orange fw-600">
                Grocerry Bazar
                </span>
              </h2>
              <p className="mt-4">Enter your email and password for login</p>
              <LoginForm />
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 d-none d-md-block">
            <Image
              src={loginPageImage}
              alt="Login Page Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

