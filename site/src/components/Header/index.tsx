import React, { useState } from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="custom-header">
      <div className="collapse bg-white mb-1" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About me</h4>
              <p className="text-muted">
                Do you want to get more information about me?
              </p>
              <p className="text-muted">I invite you to visit my {' '}
                <a
                  href="https://github.com/ibanjb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a> 
                {' '} or {' '}
                <a
                  href="https://www.linkedin.com/in/ibanjb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a> 
                {' '} sites
              </p>
              <a
                href="https://github.com/ibanjb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/github.png"
                  alt="Github"
                  style={{ width: '50%' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <strong>InstaLOD</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
