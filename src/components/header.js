import React, { Component } from 'react'
const groupPhoto = require('../images/group-photo.jpg');

export default class Home extends Component {
    render() {
        return (
            <div className="component-container">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <div className="navbar-brand">
                            The Gaffers
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>   

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        Gigs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        Shop
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        Gallery
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        Members
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <img src={groupPhoto} alt="group of shanty singers" />
                </header>
            </div>
        )
    }
}