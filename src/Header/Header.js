import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default class Header extends Component{

    render(){
        return(
            <div className="Header">
                <div className="Links">
                    <h1 className="Title">ENTERPRICE INC.</h1>
                    <ul className="header-ul">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/works">Works</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}