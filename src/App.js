import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
//import {BrowserRouter} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom"


const App = (props) => {
    return <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={Profile} />
                </div>
            </div>

        </BrowserRouter>

};

export default App;
