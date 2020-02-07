import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, Redirect, Link } from "react-router-dom";
import Profile from '../Profile';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import config from '../../config';

axios.defaults.baseURL = config.backend_host;

const useStyles = makeStyles(theme => ({
  avatar: {
    width: '3.0em',
    height: '3.0em',
    float: 'left',
    backgroundColor: '#f50057',
    marginRight: theme.spacing(4)
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    //display: 'flex',
    //justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function MyProfile() {
    const classes = useStyles();
    
    const localInfo = {
      token: localStorage.getItem('token'),
      user_id: localStorage.getItem('user_id')
    }
    const [user, setUser] = useState({firstName:"", lastName:"", teacher:"", faculty:"", course:"", subjects:"", degree:"", about:""});

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem('token');
        let user_id = localStorage.getItem('user_id');
        axios.defaults.headers.common['Authorization'] = token;
        axios.get(`http://repetito.herokuapp.com/user/${user_id}`)
          .then(response => {
            console.log(response.data)
            let result = response.data;
            setUser(result);
          })
          .catch(error => {
            console.log("No response from remote server", error);
          });

          axios.get('http://repetito.herokuapp.com/subjects')
            .then(res => {
            console.log(res);
            setSubjects( res.data );
      })
      }, []);
  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <div className={classes.container}>
            <Avatar className={classes.avatar}>{ user.firstName[0] }{ user.lastName[0] }</Avatar>
            <Typography component="h1" variant="h4" align="center">
            { user.firstName } { user.lastName }
            </Typography>
          </div>
          <>
            <>
              <Profile.MainInfo user={user} setNewUser={'Даниил'}/>
              <Profile.SkillTags user={user} subjects={subjects} setNewUser={'Даниил'}/>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                //   onClick={handleSave}
                  className={classes.button}
                >
                  {'Сохранить'}
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  className={classes.button}
                  component={Link}
                  to='/'
                >
                  {'Отменить'}
                </Button>
              </div>
            </>
          </>
        </Paper>
      </main>
    </>
  );
}