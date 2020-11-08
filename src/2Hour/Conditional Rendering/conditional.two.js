import React from 'react';

const ConditionalTwo = props => {
    const { unreadMessages } = props

    console.log(unreadMessages)
    return (
        <div>
            {unreadMessages === 0 ? <h1>You have 0 unread messages!</h1> : <h1>You have {unreadMessages} unread messages!</h1>}
        </div>
    )

}
export default ConditionalTwo