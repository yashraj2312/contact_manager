import React from 'react'

// accesing props created in App js
const ContactList =(props)=>{
    console.log(props);

    const showContactList = props.contacts.map((contact)=>{
        return (
            <div className='item'>
                <div className='content'>
                    <div className='header'>{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className='trash alternate outline icon'></i>
            </div>
        )
    })
    return (
        <div className='ui celled list'>{showContactList}</div>
    )
}

export default ContactList