import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignUp from '../../components/SignUp';
import './styles.css';

const CreateAccount = () => {
  return (
    <div className="container-fluid bg-dark h-100">
      <Header />
      <section id="signup" className="container">
        <SignUp />
      </section>
      <Footer />
    </div>
  );
};
export default CreateAccount;
