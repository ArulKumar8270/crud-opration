import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUp } from '../../../action';

export default function Register(props) {

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmitForm =(e) => {
    e.preventDefault();
    const user = {
      firstName, lastName, password, email
    }
    dispatch(signUp(user));
    props.toggleForm()
  }



  return (
     <div className="user signupBx">
        <div className="formBx">
          <form onSubmit={handleSubmitForm}>
            <h2>Create an account</h2>
            <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <input type="email" name="gender" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" name="" value="Sign Up" />
            <p className="signup">
              Already have an account ?
              <a onClick={()=>props.toggleForm()}>Sign in.</a>
            </p>
          </form>
        </div>
        <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
    </div>
  )
}
