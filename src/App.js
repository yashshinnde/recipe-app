import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from './components/Recipes';
import Header from './components/Header';
import Axios from 'axios';


function App() {


  const APP_ID="227b8062";
  const APP_KEY="289c16ac5c34d22695a891c4f2d68590";

  const [search , setSearch]= useState("Chicken");

  const [recipes,setRecipes] = useState([]);

  const onInputChange = e =>
  {
    const zero = setSearch(e.target.value);console.log(zero);
  }
  
const getRecipes = async () =>
{
  const result= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  console.log(result); 
  setRecipes(result.data.hits); 
}
const onSearchClick = () =>
  {
    getRecipes();
  }
  useEffect(async ()=>
{
  getRecipes();
} , [])
  return (
    <div>
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}></Header>
      <div className="container"><Recipes recipes={recipes}></Recipes></div>
    </div>
  );
}

export default App;
