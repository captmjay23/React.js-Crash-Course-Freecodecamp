import React from 'react';

const Conditional = props => {
    const { isLoading } = props

    return (
        <div>
            {isLoading ? <h1>Loading...</h1> : <h1>Fetching all the data is complete!</h1>}
        </div>

    )

    // if (isLoading === true) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>Fetching data is complete!</h1>
    //         </div>
    //     )
    // }


}
export default Conditional