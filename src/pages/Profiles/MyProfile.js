import React, {useState}  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, Redirect } from "react-router-dom";
import Profile from '../../components/Profile';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

import userMock from '../../mock/user.json';

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
  const history = useHistory();
  const localInfo = {
    token: localStorage.getItem('token'),
    user_id: localStorage.getItem('user_id')
  }

  const [user, setUser] = useState({
    "firstName": "",
    "lastName": "",
    "about": "",
    "isTeacher": false
  })

  if(!localInfo.token || !localInfo.user_id){
    return <Redirect to="/"></Redirect>
  }

  const handleNext = () => {
    history.push("/");
  };

  axios.get('/user/', {
    token: localInfo.token
  })
  .then(response => {
    console.log(response)
    return response
  })
  .catch(error => {
    return userMock.get.success
  })
  .then(result => {
    if(result && 'id' in result){
      setUser(result)
    }else{
      console.log('Troubles')
    }
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <div className={classes.container}>
            <Avatar className={classes.avatar}>{user.firstName[0]}{user.lastName[0]}</Avatar>
            <Typography component="h1" variant="h4" align="center">
              {user.firstName} {user.lastName}
            </Typography>
          </div>
      
          <React.Fragment>
            <React.Fragment>
                <Profile.MainInfo user={user}/>
                <Profile.SkillTags user={user}/>
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {'Сохранить'}
                  </Button>
                </div>
              </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}