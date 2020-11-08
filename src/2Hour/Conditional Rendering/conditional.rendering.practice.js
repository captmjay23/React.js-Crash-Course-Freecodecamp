import React from 'react';

const ConditionalRenderingPractice = props => {

    const { handleOnClick, buttonText, statusText } = props;

    return (

        <div className="d-flex flex-column align-items-center my-3">
            <h1>Status:<span>{statusText}</span></h1>
    <button type="button" className="btn btn-primary" onClick={handleOnClick}>{buttonText}</button>
        </div>
    )
}

export default ConditionalRenderingPractice