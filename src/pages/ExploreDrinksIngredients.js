import React, { useContext, useEffect } from 'react';
import Context from '../context/MyContext';
import IngredientCard from '../components/IngredientCard';
import fetchDrinks from '../services/fetchDrinks';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinksIngredients() {
  const {
    ingredients,
    setIngredients,
  } = useContext(Context);

  useEffect(() => {
    fetchDrinks('list.php?i=list')
      .then((result) => setIngredients(result));
  }, [setIngredients]);

  const ingredientsLoaded = ingredients.length > 0;
  return (
    <div className="allPage">
      <Header pageName="Explore Ingredients" />
      <div>
        {ingredientsLoaded && ingredients
          .map(({ strIngredient1 }) => (
            <IngredientCard
              ingredient={ strIngredient1 }
              key={ strIngredient1 }
              title={ strIngredient1 }
              cardType="drinks"
              fetchType="thecocktaildb"
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
