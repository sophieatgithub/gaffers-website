import React, { Component } from 'react'
const groupPhoto = require('../images/group-photo.jpg');

export default class Home extends Component {
    render() {
        return (
            <div className="component-container">
                <header>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Gigs</li>
                            <li>Shop</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                            <li>Members</li>
                        </ul>
                    </nav>
                    <img src={groupPhoto} alt="group of shanty singers" />
                </header>
            </div>
        )
    }
}