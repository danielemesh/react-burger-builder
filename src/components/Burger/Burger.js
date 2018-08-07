import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ingredients}) => {
  const transformedIngredients = [];
  let content;
  
  Object.keys(ingredients).forEach(igKey => {
    const len = ingredients[igKey];
    
    for (let i = 0; i < len; i++) {
      transformedIngredients.push(igKey);
    }
  });
  
  if (!transformedIngredients.length) {
    content = <p>Please start adding ingredients</p>;
  }
  else {
    content = transformedIngredients.map((igKey, i) => (
        <BurgerIngredient key={`${igKey}_ ${i}`} type={igKey}/>
    ));
  }
  
  return (
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {content}
        <BurgerIngredient type="bread-bottom"/>
      </div>
  );
};

export default Burger;