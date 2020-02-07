import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from '../../components/forOther/MainFeaturedPost';
import FeaturedPost from '../../components/forOther/FeaturedPost';
import MySidebar from '../../components/forOther/MySidebar';
import SimpleExpansionPanel from '../../components/forOther/Panels'




const mainFeaturedPost = {
  title: 'Мое имя',
  description:
    "тут subjects",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Красивая кнопка раз',
    
    description:
      'Тут я делал тото',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Красивая кнопка Два',
    
    description:
      'Придумаем чтото',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];


const sidebar = {
  title: 'Обо мне',
  description:
    'Тут данные из эбаут обо мне',
  archives: [
    { title: 'сюда емаил обо мне' },
  
  ],
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function NewMyProfile() {
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
          <MySidebar
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