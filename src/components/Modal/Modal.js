import React from 'react';
import classes from './Modal.css';
import Backdrop from '../UI/Backdrop/Backdrop';

const Modal = ({children, show, closeModal}) => (
    <React.Fragment>
      <Backdrop show={show} click={closeModal}/>
      <div
          className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}>
        {children}
      </div>
    </React.Fragment>
);

export default Modal;