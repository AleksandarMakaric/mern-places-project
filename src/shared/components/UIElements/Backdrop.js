import React from 'react';
import reactDOM from 'react-dom';
// Styles
import './Backdrop.css';

const Backdrop = (props) => {
  return reactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick} />,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
