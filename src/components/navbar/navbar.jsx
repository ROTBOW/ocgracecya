import React from "react";
import './navbar.scss';

import {ReactComponent as Insta} from './../../assets/svgs/instagram.svg';
import { ReactComponent as Mail } from "./../../assets/svgs/envelope.svg";
import { ReactComponent as Calendar } from "../../assets/svgs/calendar.svg";

// will need to change the title into a link to the homepage when that is needed

const Navbar = () => {

    return (
        <>
            <div className="navbar-reserve-space"/>
            <div className="navbar">
                <div className="navbar-middlebar">
                    <div className="navbar-leftside">Coming to Vesbers?</div>
                    <div className="navbar-title">
                        <b>OCG</b>CYA
                    </div>
                    <div className="navbar-socials">
                        <a href="https://www.instagram.com/ocgracecya/"><Insta/></a>
                        <a href="https://teamup.com/ks6hmadkxqrjc4ns29"><Calendar/></a>
                        {/* <a href="mailto:"><Mail/></a> */}
                    </div>
                </div>
                
                <div className="navbar-line"/>
            </div>
        </>
    )
};


export default Navbar;