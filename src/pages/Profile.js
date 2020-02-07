import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from '../components/forOther/MainFeaturedPost';
import FeaturedPost from '../components/forOther/FeaturedPost';
import Sidebar from '../components/forOther/Sidebar';
import SimpleExpansionPanel from '../components/forOther/Panels'
import EmailIcon from '@material-ui/icons/Email';

const mainFeaturedPost = {
  title: 'Кирилл Зырянов',
  description:
    "тут subjects",
};

const featuredPosts = [
  {
    title: 'Отзыв раз Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget',
    
  },
  {
    title: 'Отзыв раз Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuad leo lobortis eget',
    
  },
];


const sidebar = {
  title: 'Стоимость занятия',
  description:
    'Тут прайс $1000',

  social: [
    { name: 'Email', icon: EmailIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Почти ВК', icon: FacebookIcon },

  ],
};

export default function OtherProfile(props) {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <main>
        <MainFeaturedPost post={mainFeaturedPost} />
          
          <Grid container spacing={3} >
            <Grid spacing={3} container item xs={8} >
              <Grid item>
                <SimpleExpansionPanel />
              </Grid>
              <Grid item >
                <Grid item container spacing={3} >
                {featuredPosts.map(post => (
                <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>
            </Grid>
          </Grid>
            <Grid item xs={4} spacing={3}>
            <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                social={sidebar.social}
              />  
            </Grid>
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}