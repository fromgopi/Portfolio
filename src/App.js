import React, { Component } from 'react'
import './app.styles.scss';
import Header from './component/layout/Header';

export default class App extends Component {
    render() {
        return (
            <div className="maindiv">
                <Header/>
            </div>
        )
    }
}
