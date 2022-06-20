import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  const YOUR_NAME = process.env.REACT_APP_YOUR_NAME;
  return (
    <div className="footer d-flex justify-content-center align-items-center position-absolute">
      <h4>
        © 2022 by FE class. Made with love by{' '}
        <Link to="/about" className="your-name">
          {YOUR_NAME}
        </Link>
      </h4>
    </div>
  );
}
