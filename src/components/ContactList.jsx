import React from 'react'
import ContactCard from './ContactCard';

// accesing props created in App js
const ContactList =(props)=>{
    console.log(props);

    const showContactList = props.contacts.map((contactInfo)=>{
        return (
            <ContactCard contacts = {contactInfo}></ContactCard>
        )
    })
    return (
        <div className='ui celled list'>{showContactList}</div>
    )
}

export default ContactList