import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const BuildControls = ({disabledInfo, totalPrice, purchaseable, ordered, ingredientAdded, ingredientRemoved}) => (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{totalPrice.toFixed(2)}</strong></p>
      
      {controls.map(control => (
          <BuildControl
              key={control.label}
              label={control.label}
              disabled={disabledInfo[control.type]}
              add={() => ingredientAdded(control.type)}
              remove={() => ingredientRemoved(control.type)}
          />
      ))}
      <button className={classes.OrderButton}
              disabled={!purchaseable}
              onClick={ordered}>ORDER NOW
      </button>
    </div>
);

export default BuildControls;