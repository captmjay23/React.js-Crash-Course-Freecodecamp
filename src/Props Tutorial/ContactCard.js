import React from 'react';

const ContactCard = props => {
    const { contact, name, imgUrl, email } = props.contact
    return (

        <div className="container-fluid">
            <div className="contacts">
                <div className="contacts-card">
                    <img src={imgUrl} alt="randomPhoto" />
                    <h3>{name}</h3>
                    <p>Phone: {contact}</p>
                    <p>Email: {email}</p>
                </div>
                {/* <div className="contacts-card">
                    <img src="https://placekitten.com/g/200/300" alt="Kitten Two" />
                    <h3>Kitten Two</h3>
                    <p>Phone: 0123-123-1234</p>
                    <p>Email: kittenTwo21@gmail.com</p>
                </div>
                <div className="contacts-card">
                    <img src="https://placekitten.com/200/300" alt="KittenThree" />
                    <h3>KittenThree</h3>
                    <p>Phone: 0123-123-1234</p>
                    <p>Email: KittenThree21@gmail.com</p>
                </div>
                <div className="contacts-card">
                    <img src="https://placekitten.com/200/300" alt="KittenFour" />
                    <h3>KittenFour</h3>
                    <p>Phone: 0123-123-1234</p>
                    <p>Email: KittenFour21@gmail.com</p>
                </div> */}
            </div>
        </div>
    )
}

export default ContactCard;