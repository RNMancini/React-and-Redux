import React, { Component } from 'react'

class AddToDo extends Component {
    state = {
       content: '' 
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <div>
            <form onSubmit={}>
            <label>Add new todo:</label>
            <input type="text" onChange={this.handleChange} />
            </form>
            </div>
            )
    }
}