import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square  >
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h3" style={{ marginTop: 150 }}>
            Здравствуй!</Typography>
            <Typography component="h1" variant="h3">
            Живешь в общаге и хочешь подтянуть свои знания?
          </Typography>
          <Typography component="h1" variant="h5" style={{ marginTop: 70,marginBottom: 20 }}>
            Еще чуть-чуть и ты будешь прокачиваться вместе с нами!
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5">
              Уже есть аккаунт?
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
                component={Link}
                to="/sign_in"
              >
              Войти
              </Button>
            </Grid>
            <Grid item xs={6}>
            <Typography component="h1" variant="h5">
            Еще нет?
          </Typography>
              <Button
              
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
                component={Link}
                to="/sign_up"
              >
              Зарегистрироваться
              </Button>
            </Grid>
          </Grid>
          
          
          
        </div>
      </Grid>
    </Grid>
  );
}