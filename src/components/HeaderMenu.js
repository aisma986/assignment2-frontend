import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';


const HeaderMenu = () => <Route path='*' render={props => {
    let parts = props.location.pathname.split("/");
    let place = parts[parts.length - 1];
    if(parts[parts.length - 2] === "Users") {
        place = "User";
    }
    parts = parts.slice(1, parts.length - 1);
    return <nav className="breadcrumb is-medium is-centered" aria-label="breadcrumbs"><ul><li>{parts.map(breadcrumb)}{place}</li></ul></nav>}} />;
    
const breadcrumb = (part, partIndex, parts) => {
    const path = ['', ...parts.slice(0, partIndex + 1)].join("/");
    return <NavLink key={path} to={path} >{part} /</NavLink>};

export default HeaderMenu;

