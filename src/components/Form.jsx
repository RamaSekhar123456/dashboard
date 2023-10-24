import './form.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <lable>Your Name</lable>
            <input type='text'></input>
            <lable>Email</lable>
            <input type='email'></input>
            <lable>Subject</lable>
            <input type='text'></input>
            <lable>Message</lable>
            <textarea rows="6" placeholder='Type your message here'/>
            <button>Submit</button>
        </form>
         
    </div>
  )
}

export default Form