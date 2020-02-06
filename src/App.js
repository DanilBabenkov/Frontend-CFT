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
import Main from './pages/Main';
import Blog from './pages/Profiles/forOther/Blog';



function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/profile">
            <MyProfile />
          </Route>
          <Route path="/sign_in">
            <SignIn />
          </Route>
          <Route path="/sign_up">
            <SignUP />
          </Route>
          <Route path="/otherProfile">
            <Blog />
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
