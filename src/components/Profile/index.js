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
  "paronym": "",
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
        this.state = {tags: [], user: DEFAULT_EMPTY_USER}
        this.onTagsChanged = this.onTagsChanged.bind(this);
    }

    componentDidUpdate(prevProps){
      let do_subjects = () => {
        let defineSubject = (subject_id) => {
          return this.props.subjects.filter(subject => (subject.id === subject_id))[0].name
        };

        if(!(this.props.user.subjects && this.props.user.subjects.length))
        return;
        let subject_names = this.props.user.subjects.map(defineSubject)
        this.setState({tags: subject_names})
      }

      if (this.props.user.firstName !== prevProps.user.firstName){
        this.setState({user: this.props.user})
        if(this.props.subjects.length)
          do_subjects()
      }
      
      if (this.props.subjects !== prevProps.subjects){
        if(this.props.user.firstName && this.props.user.firstName.length)
        do_subjects()
      }
    }

    onTagsChanged(tags) {
      console.log("Tags are ", tags);
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
                    checked={Boolean(this.state.user.isTeacher)}
                    onChange={e => {this.updateUser(Boolean(e.target.checked), 'isTeacher')}}
                    name="isTeacher" 
                  />
                }
                label="Я преподаватель"
              />
          </Grid>
          {this.state.user.isTeacher ?
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