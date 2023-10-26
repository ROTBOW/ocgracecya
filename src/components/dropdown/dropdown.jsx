import React from "react";
import { useNavigate } from "react-router-dom";
import './dropdown.scss';

import { ReactComponent as Cross } from "../../assets/svgs/cross.svg";

const Dropdown = ({show, setShow}) => {
    const navi = useNavigate();

    const handleClick = (e) => {
        e.stopPropagation()
        setShow('')
    }

    return (
        <div className={`dropdown ${show}`}>
            <Cross className="dropdown-exit" onClick={handleClick}/>
            <ol>
                <li onClick={()=>navi('/home')}>Home</li>
                <li onClick={()=>navi('/vespers')}>Vespers</li>
                <li><a href="https://www.instagram.com/ocgracecya/">Instagram</a></li>
                <li><a href="https://teamup.com/ks6hmadkxqrjc4ns29">Calendar</a></li>
            </ol>
        </div>
    );
};



export default Dropdown;