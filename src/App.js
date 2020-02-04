import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './components/Profile';

function App() {
  return (
      <Layout>
        <Router>
          <Switch path="/profile">
            <Profile/>
          </Switch>
          <Switch path="/auth">
          </Switch>
          <Switch path="/">
          </Switch>
        </Router>
        <Profile/>
      </Layout>
  );
}

export default App;
