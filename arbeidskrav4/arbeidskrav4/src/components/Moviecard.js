

import { Link } from "react-router-dom";

export default function MovieCard({title, img, year, slug, type, imdbID }){
   
    
            // <img src={img} alt={title} />
            // <Link to={slug} className="link"></Link>*/
    return(
        <article className="movie-card">
            {/* <Link to={imdbID}><h2 className="film-title"> {title}</h2></Link> */}
            <h3>{title}</h3>
            <img src={img} alt={title} className="images"/>
            <p> utgivelses år <span>{year}</span></p>
            <p> type <span>{type}</span></p>



        </article>
    )
}