import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './navbar.scss';

// import { ReactComponent as Mail } from "./../../assets/svgs/envelope.svg";
import {ReactComponent as Insta} from './../../assets/svgs/instagram.svg';
import { ReactComponent as Calendar } from "../../assets/svgs/calendar.svg";
import { ReactComponent as Menu } from "../../assets/svgs/menu.svg";

import Dropdown from "../dropdown/dropdown";


const Navbar = () => {
    const navi = useNavigate();

    const [showDrop, setShowDrop] = useState('');

    return (
        <>
            <div className="navbar-reserve-space"/>
            <Dropdown show={showDrop} setShow={setShowDrop}/>
            <div className="navbar">
                <div className="navbar-middlebar">
                    <div className="navbar-leftside" onClick={()=>navi('/vespers')}>Coming to Vespers?</div>
                    <div className="navbar-title" onClick={()=>navi('/home')}>
                        <b>OCG</b>CYA
                    </div>
                    <div className="navbar-dropdown" onClick={()=> setShowDrop('show')}><Menu/></div>
                    <div className="navbar-socials">
                        <a href="https://www.instagram.com/ocgracecya/" target="_blank" rel="noreferrer"><Insta/></a>
                        <a href="https://teamup.com/ks6hmadkxqrjc4ns29" target="_blank" rel="noreferrer"><Calendar/></a>
                        {/* <a href="mailto:"><Mail/></a> */}
                    </div>
                </div>
                
                <div className="navbar-line"/>
            </div>
        </>
    )
};


export default Navbar;