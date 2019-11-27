import React, { Component } from 'react'
const groupPhoto = require('../images/group-photo.jpg');

export default class Home extends Component {
    render() {
        return (
            <div className="component-container">
                <header>
                    <nav className="navbar navbar-expand-lg bg-light fixed-top">
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
                        <ul class="navbar-nav ml-auto nav-flex-icons">
                            <li class="nav-item">
                            <a class="btn btn-block btn-social btn-twitter">
                                <span class="fa fa-twitter"></span> Sign in with Twitter
                            </a>
                            </li>
                            <li class="nav-item">
                            </li>
                        </ul>
                    </nav>
                    <img src={groupPhoto} alt="group of shanty singers" />
                </header>
            </div>
        )
    }
}