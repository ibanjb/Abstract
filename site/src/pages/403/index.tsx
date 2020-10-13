import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorMessage from '../../components/ErrorMessage';

const Forbidden = () => {
  return (
    <div className="container-fluid bg-dark h-100">
      <Header />
      <section id="signup" className="container">
        <ErrorMessage
          title="Access denied"
          description="You don't have permission to access requested page"
        />
      </section>
      <Footer />
    </div>
  );
};
export default Forbidden;
