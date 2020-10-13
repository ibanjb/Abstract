import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorMessage from '../../components/ErrorMessage';

const PageNotFound = () => {
  return (
    <div className="container-fluid bg-dark h-100">
      <Header />
      <section id="signup" className="container">
        <ErrorMessage
          title="Oops!"
          description="We can't seem to find the page you are looking for"
        />
      </section>
      <Footer />
    </div>
  );
};
export default PageNotFound;
