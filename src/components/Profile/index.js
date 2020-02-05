import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {TagInput} from '../TagInput';


function MainInfo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Общая информация
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Имя"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Фамилия"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="about"
            name="about"
            label="О себе"
            fullWidth
            multiline
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

class SkillTags extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {checked: false , tags: []}
        this.onTagsChanged = this.onTagsChanged.bind(this);
    }

    handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

    onTagsChanged(tags) {
      this.setState({tags})
    }

    render() {
      return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary" 
                    checked={this.state.checked}
                    onChange={this.handleCheckboxChange} 
                    name="isTeacher" 
                    value="yes"
                  />
                }
                label="Я преподаватель"
              />
          </Grid>
          {this.state.checked ?
            <Grid  item xs={12}>
              <TextField
                id="price"
                name="price"
                label="Стоимость занятия"
                fullWidth
              />
              <TagInput
                tags={this.state.tags} 
                onTagsChanged={this.onTagsChanged}
                wrapperStyle={`
                  margin-top: 16px
                `}
                tagStyle={`
                  background: #f50057;
                  font-weight: inherit;
                    font-style: inherit;
                    font-size: inherit;
                `}
                inputStyle={`
                  width: 100%;
                `}
              />
            </Grid>
          : ''
          }
        </Grid>
      )
    }
}

export default {SkillTags, MainInfo};