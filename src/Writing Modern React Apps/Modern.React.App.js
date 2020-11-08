import React, { Component } from 'react'

class WritingModernReactApp extends Component {
    constructor() {
        super()
        this.state = {
            firstName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        const { firstName } = this.state
        const handleChange = this.handleChange
        return (
            <div className="container">
                <h1 className="text-center"> Hello Writing Modern React App</h1>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        placeholder="Enter firstname"
                        className="form-control"
                    />
                </form>
            </div>
        )
    }
}
export default WritingModernReactApp