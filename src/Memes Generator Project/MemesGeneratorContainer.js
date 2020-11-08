import React, { Component } from 'react';

import MemesContentComponents from './memesContentComponents';

class MemesGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemesImgs: []
        }
        this.generateMemes = this.generateMemes.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {

                this.setState({
                    allMemesImgs: data
                })

            })
    }


    handleOnSubmit(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    generateMemes(e) {
        // const allMemesImgs = this.state.allMemesImgs.data.memes;
        const { allMemesImgs } = this.state
        // //Prevent Reload Page
        e.preventDefault();
        // // Get a random int number
        const randomNumber = Math.floor(Math.random() * allMemesImgs.data.memes.length)
        const randomMemeImg = allMemesImgs.data.memes[randomNumber].url;
        //Update the random images
        this.setState({
            randomImage: randomMemeImg
        })
    }
    render() {
        // const handleOnSubmit = this.handleOnSubmit
        // const generateMemes = this.generateMemes
        const { handleOnSubmit, generateMemes } = this
        return (
            <MemesContentComponents
                data={this.state}
                handleOnSubmit={handleOnSubmit}
                generateMemes={generateMemes}
            />
        )
    }
}


export default MemesGenerator