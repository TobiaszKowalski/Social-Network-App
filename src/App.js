import React, { Suspense } from 'react'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { initializeAppTC } from './state/reducers/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))

class App extends React.Component {

  componentDidMount() {
    this.props.initializeAppTC()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route
            path='/profile/:userId?'
            render={() => <Suspense fallback={<Preloader />}><ProfileContainer /></Suspense>}
          />
          <Route
            path='/dialogs'
            render={() => <Suspense fallback={<Preloader />}><DialogsContainer /></Suspense>}
          />
          <Route path='/users' render={() => <Suspense fallback={<Preloader />}><UsersContainer /></Suspense>} />
          <Route path='/login' render={() => <Suspense fallback={<Preloader />}><Login /></Suspense>} />
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
  connect(mapStateToProps, { initializeAppTC })
)(App);
