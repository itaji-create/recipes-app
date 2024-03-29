import './App.css';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Foods from './pages/Foods';
import Provider from './context/Provider';
import Drinks from './pages/Drinks';
import RecipeMealDetails from './pages/RecipeMealDetails';
import RecipeDrinkDetails from './pages/RecipeDrinkDetails';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreNationalite from './pages/ExploreFoodsNationalite';

function App() {
  const { pathname } = useLocation();
  let idNumbers = pathname
  .split('').filter((e) => (Number(e) || e === '0')).join('');
  if (!idNumbers) idNumbers = 52977;
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/foods" /> } />
        <Route exact path="/foods" element={ <Foods /> } />
        <Route exact path="/drinks" element={ <Drinks /> } />
        <Route exact path={ `foods/${idNumbers}` } element={ <RecipeMealDetails /> } />
        <Route exact path={ `drinks/${idNumbers}` } element={ <RecipeDrinkDetails /> } />
        <Route exact path="/explore" element={ <Explore /> } />
        <Route exact path="/explore/foods" element={ <ExploreFoods /> } />
        <Route exact path="/explore/foods/ingredients" element={ <ExploreFoodsIngredients /> } />
        <Route exact path="/explore/drinks" element={ <ExploreDrinks /> } />
        <Route
          exact
          path="/explore/drinks/ingredients"
          element={ <ExploreDrinksIngredients /> }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          element={ <ExploreNationalite /> }
        />
      </Routes>
    </Provider>
  );
}

export default App;
