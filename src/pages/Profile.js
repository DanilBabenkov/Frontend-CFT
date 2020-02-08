import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from '../components/forOther/MainFeaturedPost';
import FeaturedPost from '../components/forOther/FeaturedPost';
import SimpleExpansionPanel from '../components/forOther/Panels';
import Sidebar from '../components/forOther/Sidebar';
import { DEFAULT_EMPTY_USER } from '../config.js';
import axios from 'axios';
import { useParams, Redirect } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import SimpleModal from '@material-ui/core/Modal';
import ProfileEdit from '../components/Profile/edit'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  paper: {
    position: 'absolute',
    //width: 800,
    //backgroundColor: theme.palette.background.paper,
    //border: '2px solid #000',
    //boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
  },
}));

const featuredPosts = [
  {
    title: 'Проект №1',

    description:
      'Тут я делал тото',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Проект №2',

    description:
      'А тут я делал тото',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

export default function Profile(props) {
  const classes = useStyles();
  const [user, setUser] = useState(DEFAULT_EMPTY_USER);
  const [profile, setProfile] = useState(DEFAULT_EMPTY_USER);

  const user_id = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');
  const auth = user_id && user_id.length && token && token.length;

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const profile_id = useParams().id || -1;

  const [mainFeaturedPost, setMainFeaturedPost] = useState({
    title: 'Мое имя',
    description:
      "тут subjects",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
  });

  

  const [sidebar, setSidebar] = useState({
    title: 'Обо мне',
    description:
      'Тут данные из эбаут обо мне',
    social: [
      { name: 'сюда email', icon: EmailIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  });

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = token;

    axios.get('/user/' + user_id, {})
      .then(response => {
        let result = response.data;
        console.log(result)
        setUser(result)
      })
      .catch(error => {
        console.log(error)
      })

    if (profile_id === -1)
      return;

    axios.get('/user/' + profile_id, {})
      .then(response => {
        let result = response.data;
        console.log(result)
        setProfile(result)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  useEffect(() => {
    if(profile_id === -1)
      setProfile(user);
  }, [user]);

  useEffect(() => {
    const newSidebar = Object.assign({}, sidebar);
    newSidebar.description = profile.about;
    newSidebar.social[0].name = profile.email;
    setSidebar(newSidebar);

    const newMainFeaturedPost = Object.assign({}, mainFeaturedPost);
    newMainFeaturedPost.title = profile.firstName + " " + profile.lastName;
    console.log(profile.subjects)
    newMainFeaturedPost.description = profile.subjects.map(subject => subject.name).join(' ');
    setMainFeaturedPost(newMainFeaturedPost);
  }, [profile])

  
  if(!auth)
    return <Redirect to="/" />

  return (
    <>
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4} >
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={8} >
              <SimpleExpansionPanel />
            </Grid>
            <Grid item xs={4} >
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                social={sidebar.social}
                user={user}
                profile={profile}
                handleOpen={handleOpen}
              />
            </Grid>

          </Grid>


          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          ><div style={modalStyle} className={classes.paper}>
              <ProfileEdit handleClose={handleClose} />
              <SimpleModal />
            </div>
          </Modal>

        </main>
      </Container>
    </>
  );
}