import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './pages/Profile';

function App() {
  return (
      <Layout>
        <Router>
          <Switch>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/auth">
    
            </Route>
            <Route path="/">

            </Route>
          </Switch>
        </Router>
      </Layout>
  );
}

export default App;
