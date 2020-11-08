import React from 'react';

function FormComponents(props) {
    const { firstName, lastName, gender, age, destination } = props.data
    const { onHandleInput, submitOnClick } = props

    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="form-group form-check d-flex align-items-center my-3 col-sm-3">
                        <label className="mr-2">Firstname:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            placeholder="Enter Firstname"
                            className="form-control"
                            onChange={onHandleInput} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group form-check d-flex align-items-center my-3 col-sm-3">
                        <label className="mr-2">Lastname:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            placeholder="Enter Lastname"
                            className="form-control"
                            onChange={onHandleInput} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group form-check d-flex align-items-center my-3 col-sm-3">
                        <label className="mr-2">Age:</label>
                        <input
                            type="text"
                            name="age"
                            value={age}
                            placeholder="Enter Age"
                            className="form-control"
                            onChange={onHandleInput} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group form-check d-flex align-items-center my-3 col-sm-3">
                        <label className="mr-2 mb-0">Gender:</label>
                        <div className="mr-2">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={onHandleInput}
                                className="mr-1" />
                            Male
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={onHandleInput}
                                className="mr-1" />
                            Female
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="form-group form-check d-flex align-items-center my-3 col-sm-3">
                        <label className="mr-2">Destination:</label>
                        <input
                            type="text"
                            name="destination"
                            value={destination}
                            placeholder="Enter your destination"
                            className="form-control"
                            onChange={onHandleInput} />
                    </div>
                </div>



                <button type="submit" className="btn btn-primary" onClick={submitOnClick}>Submit</button>
            </form>
            <div className="my-3">
                <h2>Entered Information:</h2>
                <h5>Name:{firstName} {lastName} </h5>
                <h5>Age : {age}</h5>
                <h5>Gender: {gender}</h5>
                <h5>Your Destination: {destination}</h5>
            </div>
        </div>
    )
}

export default FormComponents