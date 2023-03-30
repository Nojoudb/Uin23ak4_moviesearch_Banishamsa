import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div id="container">
           <header> 
          <div className="header">
            <Link to="/">
                <h1>Filmsøk</h1>
            </Link>
            </div>
          </header> 
          <main>
            <Outlet />
          </main>
          <footer>
    
          </footer>
        </div>
    )
}