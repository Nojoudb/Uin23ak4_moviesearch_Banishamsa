

import { Link } from "react-router-dom";

export default function MovieCard({title, img, year, slug, type, imdbID }){
   

    return(
        <article className="movie-card">
            {/* { <Link to={imdbID}><h2 className="film-title"> {title}</h2></Link>} */}
            <h3>{title}</h3>
            <img src={img} alt={title} className="images"/>
            <p> Utgivelses år <span>{year}</span></p>
            <p> Type <span>{type}</span></p>



        </article>
    )
}