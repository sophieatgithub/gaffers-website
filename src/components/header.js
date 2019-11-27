import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const groupPhoto = require('../images/group-photo.jpg');

export default class Home extends Component {
    render() {
        return (
            <div className="component-container">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <div className="navbar-brand nautical-font">
                            The Old Gaffers
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>   

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to='/about'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to='/gigs'>Gigs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to='/shop'>Shop</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to='/gallery'>Gallery</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to='/contact'>Contact</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to='/members'>Members</Link>
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