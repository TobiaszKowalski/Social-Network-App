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
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { initializeAppTC } from './state/reducers/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeAppTC()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

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
          <Route path='/news' render={() => <News /> } />
          <Route path='/music' render={() => <Music /> } />
          <Route path='/settings' render={() => <Settings /> } />
          <Route path='/users' render={() => <UsersContainer /> } />
          <Route path='/login' render={() => <Login /> } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeAppTC})
)(App);
