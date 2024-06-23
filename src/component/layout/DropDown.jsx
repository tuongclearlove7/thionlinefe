import React from 'react';
import element from "../../element/element";
import {NavLink} from "react-router-dom";

const DropDown = props => {
    return (
        <>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Dropdown
                </a>
                <ul className="dropdown-menu">

                    {element?.list_route_in_dropdown.map((route, index) => {
                        // if (route.isProtected && !user) return null;
                        return (
                            <span key={index}>
                                <li>
                                    <NavLink className="dropdown-item" aria-current="page" to={route.path}>
                                        {route.name}
                                    </NavLink>
                                </li>
                            </span>
                        );
                    })}
                </ul>
            </li>
        </>
    );
};

DropDown.propTypes = {};

export default DropDown;