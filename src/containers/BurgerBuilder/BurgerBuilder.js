import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };
  
  addIngredientHandler = (type) => {
    this.setState((prevState) => ({
      ingredients: {
        ...prevState.ingredients,
        [type]: prevState.ingredients[type] + 1
      },
      totalPrice: prevState.totalPrice + INGREDIENTS_PRICES[type]
    }));
  };
  
  removeIngredientHandler = (type) => {
    const newAmount = this.state.ingredients[type] - 1;
    
    if (newAmount >= 0) {
      this.setState((prevState) => ({
        ingredients: {
          ...prevState.ingredients,
          [type]: prevState.ingredients[type] - 1
        },
        totalPrice: prevState.totalPrice - INGREDIENTS_PRICES[type]
      }));
    }
  };
  
  render() {
    return (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
          />
        </React.Fragment>
    );
  }
}

export default BurgerBuilder;