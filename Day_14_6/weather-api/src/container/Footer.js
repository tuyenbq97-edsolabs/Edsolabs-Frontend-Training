import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer position-absolute w-100 text-center bg-secondary p-2">
      © 2021 by FE class. Made with love by{' '}
      <Link className="text-decoration-none text-white" to="/About">
        {' '}
        {process.env.REACT_APP_MY_NAME}
      </Link>
    </footer>
  );
}

export default Footer;
