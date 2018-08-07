import React from 'react';

const OrderSummary = ({ingredients}) => {
  const ingredientSummary = Object.keys(ingredients)
      .map(igKey => (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>:&nbsp;
            {ingredients[igKey]}
          </li>
      ));
  
  return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
      </React.Fragment>
  );
};

export default OrderSummary;