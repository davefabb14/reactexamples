import React from 'react'
import {Link,NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navabr-light lg-light">
            <Link  className="navbar-brand"to="/"> Movie App</Link>
<button className="navbar-toggler"
type="button"
data-toggle="collapse"
data-target="#navbarNavAltMarkup"
aria-controls="navbarNavAltMarkup"

aria-label="toggle navigation"
>
    <span className="navbar-toggler-icon" />

    </button>

    <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    
        <NavLink className="nav-item nav-link" to="/movies">Movie
        </NavLink>
        <NavLink className="nav-item nav-link" to="/customers">Customer
        </NavLink> 
        <NavLink className="nav-item nav-link" to="/rentals">Rental
        </NavLink>
       </div>
    
       </div>

    </nav>

        
    );

}
export default   NavBar;
