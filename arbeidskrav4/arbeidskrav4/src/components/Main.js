import MovieCard from './Moviecard';
import { Link } from 'react-router-dom';
import Search from './SearchResults';
import SearchPage from './SearchPage';
import Layout from './Layout';
export default function Main({movies, setSearch, getMovies,title, recipes, }){
    /*
    {
        <article>
            <MovieCard title="From Russia With Love"/>
            <SearchPage/>
            
            <Layout/>
        </article>
      }*/
      console.log(recipes)
    return (
      <>
       
       <Search setSearch={setSearch} getMovies={getMovies} />
      <section className='movie-view'>
        <h2> 10 James Bond Filmer</h2>
        <div className="movie-wrapper">

            {
                recipes?.map(item => {
                    return <MovieCard title={item.Title} img={item.Poster} year={item.Year} type={item.Type}  />})
                     }
           </div>
        </section>
      </>

      ); }
