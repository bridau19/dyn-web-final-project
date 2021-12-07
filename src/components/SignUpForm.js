import React from "react";

function CreateUserForm({ signUpUser }) { // TODO: path called signUpUser
    return (
    <div className='Form'>
        <h2>Create Your Account</h2>
        <form onSubmit={(e) => signUpUser(e)} >
            <label htmlFor='name'>Name</label>
            <input type='name' name='name' placeholder='Enter Name'/>

            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Enter Email'/>

            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='****'/>

            <button type='submit'>Create Account</button>
        </form>
    </div>
    );
}

export default CreateUserForm;