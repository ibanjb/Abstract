import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

const Welcome = () => {
  return (
    <>
      <Header />

      <div className="header">
        <div className="overlay"></div>
        <video autoPlay muted loop>
          <source
            src="https://instalod.com/wp-content/themes/InstaLOD/assets/videos/WebsiteTeaser_720p_Web.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">InstaLOD Uploader</h1>
              <p className="lead mb-0">
                Use our cloud plattform to store your files
              </p>
              <div className="row mt-5">
                <div className="col-sm" />
                <div className="col-sm">
                  <a href="/login" className="btn btn-danger btn-lg my-2">
                    Login
                  </a>
                </div>
                <div className="col-sm">
                  <a href="/signup" className="btn btn-danger btn-lg my-2">
                    Sign Up
                  </a>
                </div>
                <div className="col-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="my-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <p>
                This exercise is done with <code>React</code>,{' '}
                <code>Webpack</code>, <code>Typescript</code> and{' '}
                <code>Bootstrap</code> (reactstrap).
              </p>
              <p>
                To access you can create a new user or login into your existant
                account
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Welcome;
