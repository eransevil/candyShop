import React, { Component } from 'react';

export default class Readme extends Component {
    render() {
        return (
            <div className="readme-container">
                <div className="inbal-section">
                    <h1>Inbal Carasso-lev</h1>
                    <p> IL CandyShop’s</p>
                    <p>we are Candy sellers</p>
                    <p>
                        Our additional pages are Contact Information page that includes the address and the
                        phone of the store we also added a home page with a song using the iframe
                        tag
                    </p>
                    <p>
                        All the work was challenging, especially the whole learning process,
                        but the hardest thing to accomplish was passing PROPS through The private route in react-router. After searching the internet we found the
                        solution to this (using util function)
                    </p>
                    <p>My partner is Liron Cohen, ID:
                        At first, we did everything together, so that one could help the other in the parts he was less powerful in and also we wanted to be in sync with the architecture of the site.
                        I then took over the part of the pages "Admin" and "Home" and Liron took over the pages "Logs" and "Contact"

                    </p>
                    <div className="route-info">
                        <span>SITE ROUTES:</span>
                        <span> Home page: '/'</span>
                        <span> CandyPage: '/CandyPage'</span>
                        <span> Contact: '/Contact'</span>
                        <span>Readme: '/Readme'</span>
                        <span> Admin: '/Admin'</span>
                        <span>Signup: '/Signup'</span>
                        <span> Cart: '/Cart'</span>
                    </div>
                </div>
                <div className="liron-section">
                    <h1>Liron Cohen</h1>
                    <p> IL CandyShop’s</p>
                    <p>we are selling Candies</p>
                    <p>
                        Our additional pages are Contact Information page that includes the address and the
                        phone of the store we also added a home page with a song using the iframe
                        tag
                    </p>
                    <p>
                        My learning process of React was very challenging and interesting,
                        Luckily the documentation of React is great. In addition, the Internet is full of Videos on React.
                        I am very happy that I started learning React only after I felt I
                        was good enough in java script.
                    </p>
                    <p>My partner was Inbal Carasso-lev, ID:

                        I then took over the part of the pages "Logs" and "Contact" and inbal took over the pages "Home" and "Admin"
                    </p>
                    <div className="route-info">
                        <span>SITE ROUTES:</span>
                        <span> Home page: '/'</span>
                        <span> CandyPage: '/CandyPage'</span>
                        <span> Contact: '/Contact'</span>
                        <span>Readme: '/Readme'</span>
                        <span> Admin: '/Admin'</span>
                        <span>Signup: '/Signup'</span>
                        <span> Cart: '/Cart'</span>
                    </div>
                </div>
            </div>
        );
    }
}
