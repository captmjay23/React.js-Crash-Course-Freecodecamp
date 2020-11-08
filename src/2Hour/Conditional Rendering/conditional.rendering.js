import React from 'react';
//Components
// import Conditional from './conditional'
// import ConditionalTwo from './conditional.two'
import ConditionalRenderingPractice from './conditional.rendering.practice';


class ConditionalRendering extends React.Component {
    //Conditional Part One
    /*
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    */

    //Conditional Part Two
    /*
     constructor() {
        super()
        this.state = {
            unreadMessages: [
                'Call your mom',
                'You have an apoinment with your secretary!'
            ]
        }
    }
    */

    //Conditional Part Three Practice
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,

        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick() {
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })

    }
    render() {
        const { isLoggedIn } = this.state
        let buttonText = isLoggedIn ? 'Logout' : 'Login'
        let statusText = !isLoggedIn ? 'Logout' : 'Login'
        return (
            <div>
                {/* <Conditional isLoading={this.state.isLoading} /> */}
                {/* <ConditionalTwo unreadMessages={this.state.unreadMessages.length} /> */}
                <ConditionalRenderingPractice
                    statusText={statusText}
                    buttonText={buttonText}
                    handleOnClick={this.handleOnClick} />
            </div>
        )
    }
}
export default ConditionalRendering