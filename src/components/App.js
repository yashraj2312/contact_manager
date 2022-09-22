import React from 'react'
import "../App.css"
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'


const App =()=>{

  // array list of contacts
  const listOfContacts = [      
    {
      id:1,
      name:"yash",
      email:"abc@gmail.com"

    },
    {
      id:2,
      name:"raj",
      email:"xyz@gmail.com"
    }
  ]
  return(
  <div className='ui container'>
    <Header/>
    <AddContact/>
    {/* props -- passing array of contacts i.e listOfContacts as a property (contacts) ---props are basically used pass properties of parent to child*/}
    <ContactList contacts={listOfContacts}/>
  </div>
  )
}

export default App