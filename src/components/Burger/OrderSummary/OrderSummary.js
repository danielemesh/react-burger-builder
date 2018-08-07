import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ingredients, totalPrice, purchaseCancelled, purchaseContinued}) => {
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
        <p><strong>Total Price: {totalPrice.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={purchaseCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={purchaseContinued}>Continue</Button>
      </React.Fragment>
  );
};

export default OrderSummary;