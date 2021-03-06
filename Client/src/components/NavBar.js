import React from 'react'
import logo from './icon.png'; // with import
import { useHistory } from "react-router-dom"
import M from "materialize-css"

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, 'hover');
    console.log(instances.elems);
});

const NavBar = () => {

    const history = useHistory()

    const myFunction = () => {
        console.log("aici");
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    const renderList = () => {
        var test = localStorage.getItem("user");
        if (test !== null) {



            return [
                <li><a href="/manage">Account</a></li>,
                <li><a href="/log" onClick={() => {
                    localStorage.clear();
                    M.toast({ html: 'Bye, see you soon friend :)', classes: 'rounded #616161 grey darken-2' });
                }}>Log out</a></li>
            ]
        } else {

            var admin = JSON.parse(localStorage.getItem("admin"))
            if (admin === true) {
                return [
                    <li><a href="/log" onClick={() => {
                        localStorage.clear();
                        M.toast({ html: 'Bye, see you soon friend :)', classes: 'rounded #616161 grey darken-2' });
                        history.push("/")
                    }}>Log out</a></li>]
            }
            return [
                <li><a href="/log/sign">Sign Up</a></li>,
                <li><a href="/log">LogIn</a></li>,
            ]
        }
    }

    const renderMenu = () => {
        var test = JSON.parse(localStorage.getItem("user"));
        var admin = JSON.parse(localStorage.getItem("admin"))
        if (test === null) {

            if (admin === true) {
                return [
                    <a href="/gallery" className="brand-logo"><img width="48" src={logo} alt="icon" id="myLogo" /></a>,
                    <a href="/tabs">See my work</a>,
                    <a href="/contact">Contact</a>,
                    <a href="/about">About us</a>,
                    <a href="/admin">See orders</a>,
                    <a href="/add-drawing">Add drawing</a>
                ]
            }

            return [
                <a href="/gallery" className="brand-logo"><img width="48" src={logo} alt="icon" id="myLogo" /></a>,
                <a href="/tabs">See my work</a>,
                <a href="/contact">Contact</a>,
                <a href="/about">About us</a>
            ]
        } else {

            return [
                <a href="/gallery" className="brand-logo"><img width="48" src={logo} alt="icon" id="myLogo" /></a>,
                <a class="disabled" href="javascript:function() { return false; }">Hello, {test.name} {'->'} </a>,
                <a href="/tabs">See my work</a>,
                <a href="/form">I want a drawing</a>,
                <a href="/contact">Contact</a>,
                <a href="/about">About us</a>,
                <a className="dropdown-button btn #616161 grey darken-2 large material-icons " className="" href="/cart"><i className="material-icons">shopping_cart</i></a>
            ]
        }
    }

    return (
        <div className="topnav" id="myTopnav">
            {renderMenu()}
            <a href={myFunction} role="button" className="icon" onClick={myFunction}>
                <i className="fa fa-bars"></i>
            </a>
            <a id="acc" className='dropdown-button btn #616161 grey darken-2' href="/" data-target='dropdown1'><i className="large material-icons">account_circle</i></a>
            <ul id='dropdown1' className='dropdown-content grey darken-2'>
                {renderList()}
            </ul>
        </div>
    )
}

export default NavBar