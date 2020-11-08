import React from 'react';

const Joke = props => {
    const { imgPunchline, propsQuestion, punchLine } = props.question
    return (
        <div className="container">
            <div className="punchline-container">
                <img src={imgPunchline} alt="Dog Sad" />
                <div className="punchline-joke">
                    <h3 className="joke">{propsQuestion}</h3>
                    <h3 className="joke">{punchLine}</h3>
                </div>
            </div>
        </div>

    )
}

export default Joke