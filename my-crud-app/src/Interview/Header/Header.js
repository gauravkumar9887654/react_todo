import { NavLink } from "react-router-dom";


import classes from './Header.module.css';
const Header=()=>{
    return (
        <>
        <ul className={classes.header}>
            <li>
<h1><NavLink to="/user">User</NavLink></h1>

            </li>
           <li> <h1><NavLink to="/form">Form</NavLink></h1></li>
        </ul>

        </>
    )
}
export default Header;