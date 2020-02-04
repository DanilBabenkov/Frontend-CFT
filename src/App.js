import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Layout from './components/Layout';
import MyProfile from './pages/Profiles/MyProfile';
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

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
