import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const groupPhoto = require('../images/group-photo.jpg');

export default class Home extends Component {
    render() {
        return (
            <div className="component-container">
                <header>
                    <nav className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link navbar-brand">
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
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link waves-effect waves-light">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <img src={groupPhoto} alt="group of shanty singers" />
                </header>
            </div>
        )
    }
}