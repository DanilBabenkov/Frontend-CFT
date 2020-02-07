import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { createMuiTheme} from '@material-ui/core/styles';
import Layout from './components/Layout';
import MyProfile from './pages/Profiles/MyProfile';
import SignIn from './pages/login/SignIN';
import SignUP from './pages/login/SignUP';
import Main from './pages/Main';
import Start from './pages/Start';
import OtherProfile from './pages/Profiles/OtherProfile';
import { ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: orange,
  }, 
});


function App() {
  return (
    <ThemeProvider theme={theme}>
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
            <Route path="/start">
              <Start />
            </Route>
            <Route path="/">
              <Main />
            </Route>
            
          </Switch>
        </Layout>

      </Router>
    </ThemeProvider>
  );
}

export default App;
