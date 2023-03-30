import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import Main from './components/Main';
import '../src/components/css/main.css'
import SearchPage from './components/SearchPage';


export default function App(  ) {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("James Bond")

    const getRecipes = async() =>{
      const response = await fetch(`https://www.omdbapi.com/?apikey=870a9578&s=${search}&type=movie&`)
      const data = await response.json()
      setRecipes(data.Search)
       
    }

    useEffect(() => {

      getRecipes()
     }, [search]);

     console.log(recipes)
    
     return (

        <>
          <Main recipes={recipes} />
        </>
            )
}


