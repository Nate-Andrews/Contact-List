import React from 'react';
import user from '../Images/user.jpg';

const ContactCard = (props) => {
    const {id, name, phone, email, address} = props.contact;
    return(
        <div className="item">
                <div className="content">
                    <img className="ui avatar image" src={user} alt="user"/>
                    <div className="header">{name}</div>
                    <div>{phone}</div>
                    <div>{email}</div>
                    <div>{address}</div>
                </div>
                <i className="trash alternate outline icon" style={{color:"red"}}></i>
            </div>
    );
}

export default ContactCard;