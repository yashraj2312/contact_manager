import React from 'react'

const AddContact = ()=>{
    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form'>
                <div className='field'>
                    <label>Name</label>
                    <input type = "text" name= "name" placeholder='Full name'>
                    </input>
                </div>
                < div className='field'>
                    <label>Email</label>
                    <input type='text' name ='email' placeholder='E-mail'></input>
                </div>
                <button className='ui button blue'>Save contact</button>
            </form>
        </div>

    )
}

export default AddContact