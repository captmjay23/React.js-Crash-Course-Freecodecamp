import React from 'react';

//Memes App Generator Components
import GeneratorHeader from "./MemesGeneratorHeader";
import GeneratorContainer from './MemesGeneratorContainer';

const AppMemesGenerator = () => {
    return(
        <main className="main">
            <GeneratorHeader />
            <GeneratorContainer />
        </main>
    )
}
export default AppMemesGenerator