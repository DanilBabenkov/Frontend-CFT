import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
  

export class inputText extends Component {


    constructor(){
        super();
        this.state = {value: ''};
        this.onChange = this.onChange.bind(this)
     }

    onChange(e){
    const lat = /^[A-Za-z]+$/;
    const cyr = /^[А-Яа-я]+$/;
    let proverka = e.target.value[0];
    if (e.target.value === '' || lat.test(e.target.value)) {
       this.setState({value: e.target.value})
    } else if (e.target.value === '' || cyr.test(e.target.value)) {
        this.setState({value: e.target.value})
     }
 }
    
    render() {
        return (
            <form className={useStyles.root} noValidate autoComplete="off">
            <TextField id="filled-basic" label="Filled" variant="filled" value={this.state.value} onChange={this.onChange}/>
          </form>
        )
    }
}

export default inputText
