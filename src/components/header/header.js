import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <div className="d-flex">
            <h2>
                <Link className="header" to="/">StarDB</Link>
            </h2>
            <ul className="links d-flex">
                <li>
                    <Link to="/people/">people</Link>
                </li>
                <li>
                    <Link to="/planets/">planets</Link>
                </li>
                <li>
                    <Link to="/starships/">starships</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;