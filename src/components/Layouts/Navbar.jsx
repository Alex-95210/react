import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    
    return(
            <nav className='navbar bg-primary'>
                <h1>
                <i className="fas fa-globe"></i> {props.title}
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/manufacturers'>Toutes les marques</Link>
                    </li>
                </ul>
            </nav>
        )
}

export default Navbar
