import React, { Component } from 'react';


class LifeCycleMethod extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        //GET the data i need to correctly display
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.nextProps.whatever) {
            // Do something Important
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        //return true if want to update
        //return false if not
    }

    componentWillUnmount() {
        //Teardown or cleanup your code before your component dissapears
        //(E.g. Remove event listener)
    }

    static getDerivedStateFromProps(props, state) {
        //Return the new, updated state based upn the props
    }
    getSnapshotBeforeUpdate() {
        //Create a backup of the current way things are
    }
    render() {
        return (
            <div>
                <h1>Code goes here!</h1>
            </div>
        )
    }
}

export default LifeCycleMethod