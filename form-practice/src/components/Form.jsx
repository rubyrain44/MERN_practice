import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        //clears the form data for the next time by setting state back to empty
    }

    return (
        <div>

        <form onSubmit={submitHandler}>
            <div>
                <label>First Name: </label>
                <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type='text' value={lastName} onChange={e => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type='text' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type='text' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            </div>
            <input type='submit' value='Create User'/>
        </form>

        <div>
            <h5>First Name: {firstName}</h5>
            <h5>Last Name: {lastName}</h5>
            <h5>Email: {email}</h5>
            <h5>Password: {password}</h5>
            <h5>Confirm Password: {confirmPassword}</h5>
        </div>
        </div>
    )
}

export default Form;