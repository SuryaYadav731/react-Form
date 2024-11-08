import React, { useState } from 'react'
import "./App.css"

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: '',
    gender:'',
    contact:'',
    subject:'',
    resume:'',
    url:'',
    about:''
  })
  const handleChange = (e)=>{
    setValues({...values, [e.target.name]:[e.target.value]})

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("suryayadav222003@gmail.com", values)
    console.log(values)
  }

  const ResetFun = ()=>{
    setValues({
      firstname:"", lastname:"", email:""
    })
  }
  return (
    <div className='container'>
    <h1>Form</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name*</label>
      <input type="text" placeholder='Enter First name' name='firstname' onChange={(e)=>handleChange(e)} required value={values.firstname} />

      <label htmlFor="lastname">Last Name</label>
      <input type="text" placeholder='Enter Last name' name='lastname' onChange={(e)=>handleChange(e)} required value={values.lastname}/>

      <label htmlFor="email">Email</label>
      <input type="email" placeholder='Enter Email' name='email'onChange={(e)=>handleChange(e)} value={values.email}/>

      <label htmlFor="contact">Phone Number</label>
      <input type="text" placeholder='Enter Phone Number' name='contact'onChange={(e)=>handleChange(e)} />

      <label htmlFor="gender">Gender</label>
      <input type="radio" name="gender" onChange={(e)=>handleChange(e)} /> Male
      <input type="radio" name="gender"  onChange={(e)=>handleChange(e)}/> Female
      <input type="radio" name="gender" onChange={(e)=>handleChange(e)} /> Other
      
      <label htmlFor="subject"onChange={(e)=>handleChange(e)}>Subject</label>
      <select name="subject" id="subject">
        <option value="math">Math</option>
        <option value="Physic">Physic</option>
        <option value="English">English</option>
      </select>

      <label htmlFor="resume">Resume</label>
      <input type="file" placeholder='Select Resume' name='resume' onChange={(e)=>handleChange(e)}/>

      <label htmlFor="url">Url</label>
      <input type="text" name='url' placeholder='Enter Image Url' onChange={(e)=>handleChange(e)}/>

      <label htmlFor="about">About</label>
      <textarea name="about" id="about" cols="30" rows="10" placeholder='Enter Description'onChange={(e)=>handleChange(e)}></textarea>

      <button type='reset' onClick={ResetFun}>Reset</button>
      <button type='submit'>Submit</button>
    </form>
      
    </div>
  )
}

export default App
