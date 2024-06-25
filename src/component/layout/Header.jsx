import React, {useEffect, useState} from 'react';
import Logout from "../auth/Logout";
import {NavLink} from "react-router-dom";
import DropDown from "./DropDown";
import element from "../../element/element";
import UserDropDown from "./UserDropDown";

const Header = props => {

    const [input, setInput] = useState('');

    useEffect(() => {

        document.title = input;
        if (input.trim() === '') {
            document.title = "Team1StudyWithMe";
        }
    }, [document.title]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={"/"}>
                        {props.title}
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {element?.dropdowns.map((dropdown, index) => {
                                // if (dropdown.isProtected && !user) return null;
                                return (
                                    <span key={index}>
                                        {<DropDown/>}
                                    </span>
                                );
                            })}
                            {element?.dropdownOfUsers.map((dropdown, index) => {
                                // if (dropdown.isProtected && !user) return null;
                                return (
                                    <span key={index}>
                                        {<UserDropDown/>}
                                    </span>
                                );
                            })}
                            {element?.list_route_public.map((route, index) => {
                                // if (route.isProtected && !user) return null;
                                return (
                                    <span key={index}>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to={route.path}>
                                                {route.name}
                                            </NavLink>
                                        </li>
                                    </span>
                                );
                            })}


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={event=> {
                                    setInput(event.target.value);
                                }
                            }/>
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                        <Logout></Logout>

                    </div>
                </div>
            </nav>
        </div>
    );
};

Header.propTypes = {};

export default Header;