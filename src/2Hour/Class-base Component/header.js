import React from 'react';

// #1
class Header extends React.Component {
    render() {
        return (
            <header>
                <h3>Welcome! {this.props.name}</h3>
            </header>
        )
    }
}

export default Header;