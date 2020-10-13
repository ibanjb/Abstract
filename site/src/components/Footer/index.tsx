import React from 'react';

const Footer = () => {
  return (
    <footer className="footer page-footer font-small  fixed-bottom bg-dark">
      <div className="footer-copyright text-center py-3 text-white">
        © 2020
        <a
          href="https://github.com/ibanjb/Abstract"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Iban Balasch
        </a>
      </div>
    </footer>
  );
};

export default Footer;
