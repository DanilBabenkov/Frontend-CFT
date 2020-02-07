import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from '../../components/forOther/MainFeaturedPost';
import FeaturedPost from '../../components/forOther/FeaturedPost';
import Sidebar from '../../components/forOther/Sidebar';
import SimpleExpansionPanel from '../../components/forOther/Panels'

const mainFeaturedPost = {
  title: 'Кирилл Зырянов',
  description:
    "Программист",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
};

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


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function OtherProfile(props) {
  return (
    <React.Fragment>
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
              archives={sidebar.archives}
              social={sidebar.social}
            />  
            </Grid>
               
          </Grid>
          
            
          
        </main>
      </Container>
    </React.Fragment>
  );
}