import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
//import {BrowserRouter} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom"
import state from "./components/redux/store";



const App = (props) => {
    debugger;
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={Profile} />*/}

                    <Route path='/dialogs'
                           render={ () => <Dialogs state = {props.state.dialogsPage}
                                                   newMessageText={props.state.dialogsPage.newMessageText}
                                                   dispatch = {props.dispatch}/>} />
                    <Route path='/profile'
                           render={ () => <Profile profilePage ={props.state.profilePage}
                                                   dispatch = {props.dispatch}/>}/>

                </div>
            </div>


    )
};

export default App;
