import React, { Component } from 'react';
import First from "../res/1.jpeg";
import './Home.css'

export default class Home extends Component{

    titleFontSize = {
        fontSize: '60px',
        marginBottom: '0',
        lineHeight: 1.1
    }
    descriptionFontSize = {
        fontSize: '20px',
        lineHeight: 1.3
    }

    render(){
        return(
            <div>
                <div className="HomePageTop">
                    <div>
                        <h1 className="HomePageTopText" style={this.titleFontSize}>The #1 Inovation<br/> Tech Lab</h1>
                        <h2 className="HomePageTopText" style={this.descriptionFontSize}>
                            We can help you to build you value for<br />
                            your business. Well it is not only about<br />
                            beautiful design but also about greater<br />
                            functionality and flexibility.<br />
                            Let us help with your business!<br />
                        </h2>
                    </div>
                    <img src={First} className="FirstImage" alt="Cyberpunk 2077 First"/>
                </div>

                <div className="HomePage">
                    <h1>HOME</h1>
                </div>
            </div>
        )
    }
}