import React from 'react';

/* Props Components For Tutorial */
// import ContactCard from './Props Tutorial/ContactCard';

/* Prop-styling Practice Puncline Joke Activity */
// import Joke from './Props and Styling Practice/props-styling-practice';

/* Mapping Components Practice One */
// import QandAData from './Mapping Components Practice/QuestionAndAnswer/question-answer';
// import QuestionandAnswer from './Mapping Components Practice/QuestionAndAnswer/QandA';

/* Mapping Components Practice Two */
// import SchoolProductData from './Mapping Components Practice/School Product/SchoolProductData';
// import SchoolProduct from './Mapping Components Practice/School Product/SchoolProduct'

const App = () => {
    //This is Mapping Components Practice One
    /*
    const QandAComponents = QandAData.map((QandA) => {
        return (
            <QuestionandAnswer
                key={QandA.id}
                question={QandA.question}
                answer={QandA.answer}
            />
        )
    })
     */
    //This is Mapping Components Practice Two
    /*
    const SchoolProductComponents = SchoolProductData.map((product) => {
        return (
            <SchoolProduct
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
            />
        )
    })
    */




    return (
        <main className="main container">
            { /* TODOLIST CRASH COURSE */}
            {/* <TodoApp />  */}



            {/* <ContactCard
                contact={{
                    name: "Kitten One",
                    imgUrl: "http://placekitten.com/200/300",
                    phone: "0123-123-1234",
                    email: "kittinOne21@gmail.com"
                }} />

            <ContactCard
                contact={{
                    name: "Kitten Two",
                    imgUrl: "https://placekitten.com/g/200/300",
                    phone: "0123-123-1234",
                    email: "kittenTwo21@gmail.com"
                }}
            />

            <ContactCard
                contact={{
                    name: "Kitten Three",
                    imgUrl: "https://placekitten.com/g/200/300",
                    phone: "0123-123-1234",
                    email: "kittenThree21@gmail.com"
                }}
            />
            <ContactCard
                contact={{
                    name: "Kitten Four",
                    imgUrl: "http://placekitten.com/200/300",
                    phone: "0123-123-1234",
                    email: "kittinFour21@gmail.com"
                }}
            /> */}

            {/* Props and Styling Practice */}
            {/* <Joke
                question={{
                    imgPunchline: "https://th.bing.com/th/id/OIP.5JDg0pdTYjZgXIZq5N7rGAHaLH?pid=Api&rs=1",
                    propsQuestion: "You know why the old lady fell down the well?",
                    punchLine: "She didn't see that well!"
                }}
            />
            <Joke
                question={{
                    imgPunchline: "https://memegenerator.net/img/images/5170470.jpg",
                    propsQuestion: "What do you call a dead fly?",
                    punchLine: "A flew!"
                }}
            />
            <Joke
                question={{
                    imgPunchline: "https://memegenerator.net/img/images/300x300/9848987/meme-doge.jpg",
                    propsQuestion: "Once, i told a chemistry joke",
                    punchLine: "There was no reaction!"
                }}
            />
            <Joke
                question={{
                    imgPunchline: "https://memegenerator.net/img/images/6224248/high-llama.jpg",
                    propsQuestion: "When you check you bank account",
                    punchLine: "The day after christmas!"
                }}
            />
            <Joke
                question={{
                    imgPunchline: "https://th.bing.com/th/id/OIP.GwZAIBmBSsP7zuKvly6HDQAAAA?pid=Api&rs=1",
                    propsQuestion: "When the patient tells you ",
                    punchLine: "They haven't pooped in 13 days!"
                }}
            /> */}

            {/* Mapping Components Practice One */}
            {/* <QandA /> */}
            {/* <div className="QandACards container">
                {QandAComponents}
            </div> */}

            {/* Mapping Components Practice Two */}
            {/* <div className="school-products-container">
                <div className="school-products row">
                    {SchoolProductComponents}
                </div>
            </div> */}


            {/* Class Base Components Course */}
        </main>
    )
}
export default App;