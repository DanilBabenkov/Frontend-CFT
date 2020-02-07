import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Layout from './components/Layout';
import SignIn from './pages/login/SignIN';
import SignUP from './pages/login/SignUP';
import SignOut from './pages/login/SignOut';
import Main from './pages/Main';
import Start from './pages/Start';
import Profile from './pages/Profile';

function App() {
  let token = localStorage.getItem('token');
  let user_id = localStorage.getItem('user_id');
  let authorised = Boolean(token && token.length && user_id && user_id.length);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/user/:id" component={Profile} />
          <Route path="/other_profile">
            <OtherProfile />
          </Route>
          <Route path="/profile">
            <NewMyProfile />
          </Route>
          <Route path="/sign_in">
            <SignIn />
          </Route>
          <Route path="/sign_up">
            <SignUP />
          </Route>
          <Route path="/sign_out">
            <SignOut />
          </Route>
          <Route path="/">
            {authorised? <Main />:<Start />}
          </Route>

        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
