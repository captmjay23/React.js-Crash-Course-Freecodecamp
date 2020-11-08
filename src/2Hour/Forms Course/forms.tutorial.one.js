import React from "react";

class FormTutorialOne extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: false,
            gender: "",
            favColor: "blue"
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target

        // Ternary Operator
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleSubmit(event) {
        // Prevent from reloading page
        event.preventDefault();
    }
    render() {
        const { firstName, lastName, isFriendly, gender, favColor } = this.state
        const submitOnClick = this.handleSubmit
        const handleChangeInput = this.handleChange
        return (
            <div className="d-flex flex-column align-items-center">
                <form onSubmit={submitOnClick}>
                    <label>
                        Name:
                    <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={handleChangeInput}
                            placeholder="Firstname" />
                    </label>
                    <label>
                        Lastname:
                    <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={handleChangeInput}
                            placeholder="Lastname" />
                    </label>
                </form>


                {/** 
             * Other Useful form elements
             * <textarea /> element
             * <input type="checkbox"/>
             * <input type="radio"/>
             * <select> and <option> element
            */}
                <textarea
                    value={"Some other text!"}
                    onChange={handleChangeInput}
                />
                <label>
                    <input
                        name="isFriendly"
                        type="checkbox"
                        checked={isFriendly}
                        onChange={handleChangeInput}
                    />
                    Is Friendly ?
                </label>
                <div>
                    <label>
                        <input
                            name="gender"
                            type="radio"
                            value="Male"
                            checked={gender === "male"}
                            onChange={handleChangeInput}
                        />
                        Male
                    </label>
                    <br />
                    <label>
                        <input
                            name="gender"
                            type="radio"
                            value="Female"
                            checked={gender === "female"}
                            onChange={handleChangeInput}
                        />
                        Female
                    </label>
                </div>

                <labe>
                    My Favorite Color:
                    <select
                        value={favColor}
                        onChange={handleChangeInput}
                        name="favColor"
                    >
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                    </select>
                </labe>

                <h1>A name was submitted: {firstName} {" "} {lastName}</h1>
                <h1>Gender: {gender}</h1>
                <h1>My Favorite Color: {favColor}</h1>
                <button type="submit" className="btn btn-primary">SUBMIT</button>
            </div>
        );
    }
}

export default FormTutorialOne;
