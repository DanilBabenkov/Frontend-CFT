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

    axios.post('/user/' + profile.id + '/review/', {
      "mark": mark,
      "comment": "Оценка от пользователя "+user.lastName+" "+user.firstName,
      "reviewer_id": user.id
    });
    
  }

  if(!(profile && profile.id && profile.id.length) || profile.id < 0 || user.id === profile.id)
  return (
    <div>
     
      <Box component="fieldset" borderColor="transparent">
        <Typography variant="h6" component="legend">Ваш Рейтинг</Typography>
        <Rating name="read-only" value={mark} readOnly />
      </Box>
      
    </div>
  )
  else
  return (
    <div>

      <Box component="fieldset" borderColor="transparent">
        <Typography variant="h6" component="legend">Рейтинг преподавателя</Typography>
        <Rating
          name="simple-controlled"
          value={mark}
          onChange={handleChange}
        />
      </Box>


    </div>
  );
}