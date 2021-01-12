import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
//import {BrowserRouter} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom"
import state from "./components/redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";




const App = (props) => {
      return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={Profile} />*/}

                    <Route path='/dialogs'
                           render={ () => <DialogsContainer />} />
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer />}/>
                    <Route path='/users'
                           render={ () => <UsersContainer />} />
                </div>
            </div>
    )
};

export default App;
