import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorMessage from '../../components/ErrorMessage';

const ServerError = () => {
  return (
    <div className="container-fluid bg-dark h-100">
      <Header />
      <section id="signup" className="container">
        <ErrorMessage
          title="Sorry, unexpected error"
          description="We are working on fixing the problem. Be back soon"
        />
      </section>
      <Footer />
    </div>
  );
};
export default ServerError;
