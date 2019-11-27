import React, { Component } from 'react'
const groupPhoto = require('../images/group-photo.jpg');

export default class Home extends Component {
    render() {
        return (
            <div className="component-container">
                <header>
                    <img src={groupPhoto} alt="group of shanty singers" />
                </header>
            </div>
        )
    }
}