import React from 'react'

function MemesContentComponents(props) {
    const { topText, bottomText, randomImage } = props.data
    const { handleOnSubmit, generateMemes } = props
    console.log(props)
    return (
        <section className="memes-content">
            <div className="container">

                <form className="memes-form">
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-group">
                                <label>Top Text:</label>
                                <input
                                    name="topText"
                                    className="form-control"
                                    placeholder="Enter Top Text..."
                                    value={topText}
                                    onChange={handleOnSubmit} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label>Bottom Text:</label>
                                <input
                                    name="bottomText"
                                    className="form-control"
                                    placeholder="Enter Bottom Text..."
                                    value={bottomText}
                                    onChange={handleOnSubmit} />
                            </div>
                        </div>
                    </div>
                    <div className="button-container d-flex flex-column align-items-center">
                        <button type="submit" className="btn btn-primary" onClick={generateMemes}>Generate</button>
                    </div>
                </form>

                {/* Memes Generator Result */}
                <div className="meme-result">
                    <div className="meme-card">
                        <div className="card-img-container">
                            <img src={randomImage} alt="Random Images" />
                        </div>
                        <div className="card-text">
                            <h3 className="text top-text">{topText}</h3>
                            <h3 className="text bottom-text">{bottomText}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MemesContentComponents