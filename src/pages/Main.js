import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
/* eslint-disable no-use-before-define */
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckboxesTags from '../components/Filters/index'
import PersonsList from '../components/ExampleGet/PersonalList'
import PersonsInput from '../components/ExamplePost/PersonalInput'
import { render } from '@testing-library/react';
const drawerWidth = 240;
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles(theme => ({
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



export default function MiniDrawer() {

  const classes = useStyles();
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
  const filters = [0,1,2,3];

    return (
      <div className={classes.root}>
        <main>
          {/* Hero unit */}
          {/* <PersonsInput/> */}
          
          <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={1}>
            {filters.map(filter => (
              <Grid item xs={12} sm={6} md={3}>
                <CheckboxesTags filter={filter}/>
              </Grid>
            ))}
            </Grid>
            
            {/* End hero unit */}
            <Grid container spacing={4}>
              <PersonsList/>
            </Grid>
          </Container>
        </main>
      </div>
    );
}

const top100Films = [
  { title: 'onlyTeacher', year: 1994 },
  { title: 'faculty', year: 1972 },
  { title: 'course: Part II', year: 1974 },
  { title: 'subject', year: 2008 },
  { title: 'degree', year: 2008 },
];