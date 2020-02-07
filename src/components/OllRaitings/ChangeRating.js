import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function ChangeRating() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      
      <Box component="fieldset" borderColor="transparent">
      <Typography variant="h6" component="legend">Рейтинг преподавателя</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      
      
    </div>
  );
}