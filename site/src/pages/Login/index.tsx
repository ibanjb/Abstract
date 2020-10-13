import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignIn from '../../components/SignIn';
import './styles.css';

const Login = () => {
  return (
    <div className="container-fluid bg-dark h-100">
      <Header />
      <section id="signin" className="container">
        <SignIn />
      </section>
      <Footer />
    </div>
  );
};
export default Login;
