import React from 'react';
import axios from 'axios';

class PersonsInput extends React.Component {
    state = {
        mane: '',
    }

    handleChange = event => {
        this.setState({name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
        }

        axios.post('http://jsonplaceholder.typicode.com/users', { user })
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="name" onChange={this.handleChange}></input>
                </label>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default PersonsInput;