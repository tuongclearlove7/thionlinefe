import React, {useEffect, useState} from 'react';
import logo from "../../assets/image/logo_team1.png"
import styles from "../../assets/css/styles.module.css"
import {Link, Navigate, NavLink} from "react-router-dom";

const Home = props => {

    const [title, setTitle] = useState(document.title);

    useEffect(() => {

        return()=>{
            setTitle(document.title);
        }
    }, [document.title]);

    return (
        <div className={`${styles.padding_top_50px}`}>
            <h2>Online exam platform
                <span className={`${styles.purple_color}`}>
                    <NavLink className={`${styles.underline_none} ${styles.purple_color}`} to="/home">
                        {title}
                    </NavLink>
                </span>
            </h2>
            <div>
                <img src={logo ? logo : null}
                     alt={logo ? logo : null}
                     width={"15%"}
                />
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;