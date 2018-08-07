import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };
  
  purchaseHandler = () => {
    this.setState({purchasing: true});
  };
  
  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };
  
  purchaseContinueHandler = () => {
    console.log('continue');
  };
  
  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
        .map(igKey => ingredients[igKey])
        .reduce((result, amount) => result + amount, 0);
    
    this.setState({purchaseable: sum > 0});
  };
  
  addIngredientHandler = (type) => {
    this.setState((prevState) => ({
      ingredients: {
        ...prevState.ingredients,
        [type]: prevState.ingredients[type] + 1
      },
      totalPrice: prevState.totalPrice + INGREDIENTS_PRICES[type],
      purchaseable: true
    }));
  };
  
  removeIngredientHandler = (type) => {
    const ingredients = {...this.state.ingredients};
    const newAmount = ingredients[type] - 1;
    
    if (newAmount >= 0) {
      ingredients[type] = newAmount;
      const totalPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
      
      this.setState({
        ingredients,
        totalPrice
      });
      
      this.updatePurchaseState(ingredients);
    }
    
  };
  
  render() {
    const disabledInfo = Object.keys(this.state.ingredients)
        .reduce((result, key) => {
          result[key] = this.state.ingredients[key] === 0;
          return result;
        }, {});
    
    return (
        <React.Fragment>
          <Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
            <OrderSummary ingredients={this.state.ingredients}
                          totalPrice={this.state.totalPrice}
                          purchaseCancelled={this.purchaseCancelHandler}
                          purchaseContinued={this.purchaseContinueHandler}
            />
          </Modal>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
              totalPrice={this.state.totalPrice}
              disabledInfo={disabledInfo}
              purchaseable={this.state.purchaseable}
              ordered={this.purchaseHandler}
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
          />
        </React.Fragment>
    );
  }
}

export default BurgerBuilder;