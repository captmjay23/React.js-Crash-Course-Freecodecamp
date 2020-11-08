import React, { Component } from 'react';

// FORMS COMPONENTS
import FormComponents from './FormComponents'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: ""
        }
        this.submitOnClick = this.submitOnClick.bind(this)
        this.onHandleInput = this.onHandleInput.bind(this)
    }

    onHandleInput(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    submitOnClick(e) {
        //Prevent from refreshing the page
        e.preventDefault();

    }

    render() {
        const submitOnClick = this.submitOnClick
        const onHandleInput = this.onHandleInput

        return (
            < FormComponents
                data={this.state}
                submitOnClick={submitOnClick}
                onHandleInput={onHandleInput}
            />
        )

    }
}

export default Form