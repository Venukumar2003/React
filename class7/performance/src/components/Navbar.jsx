import React from "react";
import { Link } from "react-router-dom"


const Navbar = () => {

    return (
        <nav>

            <ul>
                <li>
                    <Link to="/" > HomePage</Link>
                </li>

                <li>
                    <Link to="/about" > AboutPage </Link>
                </li>

                <li>
                    <Link to="/contact"> ContactPage </Link>
                </li>
            </ul>
            

        </nav>
    )
}

export default Navbar;