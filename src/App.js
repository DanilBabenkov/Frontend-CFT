import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { createMuiTheme} from '@material-ui/core/styles';
import Layout from './components/Layout';
import SignIn from './pages/login/SignIN';
import SignUP from './pages/login/SignUP';
import SignOut from './pages/login/SignOut';
import Main from './pages/Main';
import Start from './pages/Start';
import Profile from './pages/Profile';
import ChangeProfile from './components/Profile/changeProfile'
import NewMyProfile from './pages/Profiles/NewMyProfile';
import { ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: orange,
  }, 
});


function App() {
  let token = localStorage.getItem('token');
  let user_id = localStorage.getItem('user_id');
  let authorised = Boolean(token && token.length && user_id && user_id.length);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/sign_in">
              <SignIn />
            </Route>
            <Route path="/sign_up">
              <SignUP />
            </Route>
            <Route path="/user/:id" component={Profile} />
          <Route path="/other_profile">
            <Profile />
          </Route>
          <Route path="/profile">
            <NewMyProfile />
          </Route>
          <Route path="/change_profile">
          <ChangeProfile/>
          </Route>
          <Route path="/">
            {authorised? <Main />:<Start />}
          </Route>
            
          </Switch>
        </Layout>

      </Router>
    </ThemeProvider>
  );
}

export default App;
