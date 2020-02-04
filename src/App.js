import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Layout from './components/Layout';
import MyProfile from './pages/Profiles/MyProfile';

function App() {
  return (
      <Layout>
        <Router>
          <Switch>
            <Route path="/profile">
              <MyProfile/>
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
