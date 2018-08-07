import React from 'react';
import classes from './BuildControl.css';

const BuildControl = ({label, disabled, add, remove}) => (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      
      <button className={classes.Less}
              disabled={disabled}
              onClick={remove}>Less
      </button>
      
      <button className={classes.More}
              onClick={add}>More
      </button>
    </div>
);

export default BuildControl;