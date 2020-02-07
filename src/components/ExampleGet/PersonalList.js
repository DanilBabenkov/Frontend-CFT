import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grow } from '@material-ui/core';
import AccountIcon from '../avatars/AccountIcon';

const drawerWidth = 240;

const classes = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    display: 'justify-content',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

class PersonsList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://repetito.herokuapp.com/user')
      .then(res => {
        console.log(res);
        let users = res.data;
        this.setState({ persons: users/*.filter(user=> user.teacher) */});
      })
  }

  render() {
    return (
      this.state.persons.map(person => (
        <Grid item key={person.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              title="Image title"
            />
            <AccountIcon/>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {person.firstName} <br />
                {person.lastName}
              </Typography>
              <Typography>
                {person.about}
              </Typography>
              <Typography>
                
                  {person.price + ' руб./занятие'}
              </Typography>
            </CardContent>
            <CardActions>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              >
                <Button component={Link} to={"/user/"+person.id} size="small" color="primary">
                  Смотреть
                </Button>
                <Button size="small" disabled={true}>
                {'Средняя оценка: ' + person.avgMark}
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      ))
    )
  }
}

export default PersonsList;