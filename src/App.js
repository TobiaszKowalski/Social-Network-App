import React from 'react'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import { Route } from 'react-router-dom';


const App = (props) => {
  return (
      <div className = 'app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className = 'app-wrapper-content'>
          <Route 
            path='/profile/:userId?' 
            render={() => <ProfileContainer />} 
          />
          <Route 
            path='/dialogs' 
            render={() => <DialogsContainer /> } 
          />
          <Route exact path='/news' render={() => <News /> } />
          <Route exact path='/music' render={() => <Music /> } />
          <Route exact path='/settings' render={() => <Settings /> } />
          <Route path='/users' render={() => <UsersContainer /> } />
      </div>
      </div>
  );
}

export default App;