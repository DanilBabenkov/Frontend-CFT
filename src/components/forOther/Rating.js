import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';

export default function StarRating(props) {
  const [mark, setMark] = React.useState(0);
  const {user, profile} = props;

  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = token;
  
  const handleChange = (e, newMark) => {
    setMark(newMark);

    const review = {
      "mark": mark,
      "comment": "Оценка от пользователя "+user.lastName+" "+user.firstName,
      "reviewer_id": user.id
    };

    console.log(review);

    axios.post('/user/' + profile.id + '/review/', review);
  }

  const auth = (token && token.length);
  const self = (profile.id < 0 || user.id === profile.id);
  const canChange = (auth && !self);

  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <Typography variant="h6" component="legend">{ canChange? 'Рейтинг преподавателя' : 'Ваш Рейтинг'}</Typography>
        <Rating 
          name="read-only"
          
          value={profile.avgMark}  
          readOnly={!canChange}
          onChange={(canChange)? handleChange : ()=>{}}/>
      </Box>
    </div>
  )
}