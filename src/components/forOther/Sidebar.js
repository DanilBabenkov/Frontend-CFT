import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Rating from './Rating'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { description, social, title, profile, user, handleOpen } = props;
  
  const self = (profile.id < 0 || user.id === profile.id);
  
  return (
    <Grid item xs={12} key="asd">
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>

        <Rating profile={profile} user={user}/>
        {(self)? <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleOpen}
          >
            Изменить данные профиля
          </Button> : ''}
        

      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
      Контакты
      </Typography>
      {social.map((network,index) => (
        <Link display="block" variant="body1" href="#" key={'link'+index}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};