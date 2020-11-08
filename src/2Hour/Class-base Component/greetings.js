import React from 'react'

// #2
class Greetings extends React.Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "goodevening"
        }
        return (
            <h3>Good {timeOfDay} to you! sir/madam.</h3>
        )
    }
}

export default Greetings;