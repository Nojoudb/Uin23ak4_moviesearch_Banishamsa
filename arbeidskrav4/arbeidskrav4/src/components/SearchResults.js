

// import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

export default function Search({setSearch, getMovies}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
        console.log(event.target.value)

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" className="search2" placeholder="Søk etter filmer" onChange={handleSearch} />
            <button type="submit"  className="search-button" onClick={getMovies}></button>
        </form>
    )
}


      