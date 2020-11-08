import React from 'react';

/* QandA Data */

const QandA = props => {

    const {question, answer} = props;
    return (
        <div className="card my-3 p-3">
            <h3>Question: {question}</h3>
            <h3>Answer: {answer}</h3>
        </div>
    )
}
export default QandA;