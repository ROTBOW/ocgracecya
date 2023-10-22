import React from "react";
import './navbar.scss';

import {ReactComponent as Insta} from './../../assets/svgs/instagram.svg';
import { ReactComponent as Mail } from "./../../assets/svgs/envelope.svg";

// will need to change the title into a link to the homepage when that is needed

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-middlebar">
                <div>Coming to Vesbers?</div>
                <div className="navbar-title">
                    <b>OCG</b>CYA
                </div>
                <div className="navbar-socials">
                    <Insta/>
                    <Mail/>
                </div>
            </div>
            
            <div className="navbar-line"/>
        </div>
    )
};


export default Navbar;