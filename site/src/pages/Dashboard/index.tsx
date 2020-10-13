import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DragnDrop from '../../components/DragnDrop';
import Uploaded from '../../components/Uploaded';
import './styles.css';

const Dashboard = () => {
  return (
    <div className="bg-custom">
      <Header />
      <main role="main" className="container mt-4 pb-4">
        <DragnDrop />
        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h6 className="border-bottom border-gray pb-2 text-pink mb-0">
            Most recent files
          </h6>
          <Uploaded />
          <Uploaded />
          <Uploaded />
          <Uploaded />
          <Uploaded />
          <Uploaded />
          <Uploaded />
        </div>
      </main>
      <div className="pb-5" />
      <Footer />
    </div>
  );
};

export default Dashboard;
