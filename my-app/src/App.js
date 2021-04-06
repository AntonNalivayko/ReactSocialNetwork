import React, { Profiler } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route as Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import LoginPage from './components/Login/Login';


const App = (props) => {


    return (
        <BrowserRouter>
            < div className="app-wrapper">
                < HeaderContainer/>
                < Navbar />
                <div className='app-wrapper-content'>
                    {/* <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/> */}

                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/profile' render={() => <ProfileContainer />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/login' render={() => <LoginPage />} />
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
