import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from '../components/forOther/MainFeaturedPost';
import FeaturedPost from '../components/forOther/FeaturedPost';
import SimpleExpansionPanel from '../components/forOther/Panels';
import Sidebar from '../components/forOther/Sidebar';
import { DEFAULT_EMPTY_USER } from '../config.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';


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
  const [user, setUser] = useState(DEFAULT_EMPTY_USER);
  const [profile, setProfile] = useState(DEFAULT_EMPTY_USER);

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
    const user_id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');
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
    const newSidebar = Object.assign({}, sidebar);
    newSidebar.description = user.about;
    newSidebar.social[0].name = user.email;
    setSidebar(newSidebar);

    const newMainFeaturedPost = Object.assign({}, mainFeaturedPost);
    newMainFeaturedPost.title = user.firstName + " " + user.lastName;
    newMainFeaturedPost.description = user.subjects.join(' ');
    setMainFeaturedPost(newMainFeaturedPost);
  }, [user])

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
              />
            </Grid>

          </Grid>



        </main>
      </Container>
    </>
  );
}