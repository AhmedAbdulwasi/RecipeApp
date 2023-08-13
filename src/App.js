import React, {useEffect,useState} from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  // please don't use my api id and key cause it will be too many requests using the same id and key and it wont work. lol so please dont use it.
  const APP_ID = "bfa165cc";
  const APP_KEY = "66ec6349da36bcc24af41181bfe429bf";
  const[query,setQuery] = useState('');
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  const FetchHere = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;



  const [search, setSearch] = useState("");


  const [recipes, setRecipes] = useState([]);



  useEffect(() => {
    
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(FetchHere);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <h1>Recipe API App</h1>
      <h2>By Ahmed Bein</h2>
      <form onSubmit={getSearch} className="sform">
        <input className="sbar" type="text" value={search} onChange={updateSearch} placeholder="e.g. apple"/>
        <button className="sbutton" type="submit">
          Search
        </button>
        

      </form>
  {recipes.map((recipe) => (
  recipe.recipe && recipe.recipe.label ? (
    <Recipe 
      key={recipe.recipe.label} 
      name={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image} 
      time={recipe.recipe.totalTime} 
      url={recipe.recipe.url}
      ingredients={recipe.recipe.ingredients} 
    />
  ) : null
))}
    </div>
  );
}


export default App;
