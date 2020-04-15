import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

export default class Contacts extends Component{
    render(){
        return(
            <div className="Footer">
                 <div className="Links">
                    <ul className="header-ul">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/works">Works</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </div>
                <pre className="Copyright">
                            Copyright © 2020 Yevhenii Kruhliuk<br />
                            All rights reserved
                </pre>
            </div>
        )
    }
}