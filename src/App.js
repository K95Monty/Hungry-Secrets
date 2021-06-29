import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Recipe from './Recipe';
import Footer from './Footer';
import Edamam from './Edamam';

function App() {

  /*add nutrition 
  exampl request https://api.edamam.com/api/food-database/v2/nutrients?app_id=b2fa4db4&app_key=9e6889ee625a7c61f1f2cc085622eea2*/

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken'); //chicken is the default value

  useEffect(() => { 
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${Edamam.appId}&app_key=${Edamam.appKey}`)
    .then(response => response.json())
    .then(data => setRecipes(data.hits));
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <Header />
      <form className="searchForm" onSubmit={getSearch}>
        <input className="searchBar" type="text" value={search} onChange={updateSearch}/>
        <button className="searchButton" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        
          <Recipe title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}

                  ingredients={recipe.recipe.ingredients}
                  caution={recipe.recipe.cautions}
                  meal={recipe.recipe.mealType}
                  dish={recipe.recipe.dishType}
          />
        
      ))
      }
      </div>
      <Footer />
    </div>
  );
}

export default App;
