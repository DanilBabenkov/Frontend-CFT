import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {TagInput} from '../TagInput';

const DEFAULT_EMPTY_USER = { 
  "id": -1,
  "firstName": "",
  "lastName": "",
  "paronym": "ч",
  "about": "",
  "isTeacher": false,
  "subjects": [],
  "price": 0,
  "avgMark": 0,
  "photo" : null
}

function MainInfo(props) {
  const [user, setUser] = useState(DEFAULT_EMPTY_USER);

  const updateUser = (value, key) => {
    let newUser = Object.assign({}, user);
    newUser[key] = value;
    setUser(newUser)
  };

  useEffect(() => {
    if(props.user.firstName)
    setUser(props.user);
  }, [props.user]);

  return (
    <>
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
            onChange={val=> updateUser(val.target.value, "firstName")}
            value={user.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Фамилия"
            onChange={val=> updateUser(val.target.value, "lastName")}
            value={user.lastName}
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
            onChange={val=> updateUser(val.target.value, "about")}
            value={user.about}
            multiline
          />
        </Grid>
      </Grid>
    </>
  );
}

class SkillTags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: props.user.isTeacher , tags: props.user.subjects, user: DEFAULT_EMPTY_USER}
        this.onTagsChanged = this.onTagsChanged.bind(this);
    }

    handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

    onTagsChanged(tags) {
      this.setState({tags})
    }

    updateUser(value, key){
      let newUser = Object.assign({}, this.state.user);
      newUser[key] = value;
      this.setState({user: newUser})
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
                value={this.state.user.price}
                onChange={e => {this.updateUser(e.target.value, 'price')}}
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
              />
            </Grid>
          : ''
          }
        </Grid>
      )
    }
}

export default {SkillTags, MainInfo};