import React from 'react';
import element from "../../element/element";
import {NavLink} from "react-router-dom";

const UserDropDown = props => {



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
                    User
                </a>
                <ul className="dropdown-menu">

                    {element?.list_user_route.map((route, index) => {
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

UserDropDown.propTypes = {};

export default UserDropDown;