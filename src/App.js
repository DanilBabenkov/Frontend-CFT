import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Layout from './components/Layout';
import MyProfile from './pages/Profiles/MyProfile';
import SignIn from './pages/login/SignIN';
import SignUP from './pages/login/SignUP';
import SignOut from './pages/login/SignOut';
import Main from './pages/Main';
import Start from './pages/Start';
import OtherProfile from './pages/Profiles/OtherProfile';



function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/profile">
            <MyProfile />
          </Route>
          <Route path="/other_profile">
            <OtherProfile />
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
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/">
            <Main />
          </Route>

        </Switch>
      </Layout>

    </Router>
  );
}

export default App;
