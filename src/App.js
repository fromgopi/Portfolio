import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.styles.scss';
import Home from './component/Home/Home';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter basename="/api">
                <div className="maindiv">
                    <Header/>
                    <Home/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}
