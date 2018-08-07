import React from 'react';
import classes from './BuildControl.css';

const BuildControl = ({label, add, remove}) => (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      
      <button className={classes.Less} onClick={remove}>Less</button>
      <button className={classes.More} onClick={add}>More</button>
    </div>
);

export default BuildControl;