import React, { Component } from 'react'
import './Home.css'
import {Helmet} from 'react-helmet';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Helmet className = "fullpage" />
                <div className = "pagetitle"> Welcome to UniFam </div>
            </div>
        )
    }
}
