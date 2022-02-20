import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { login } from '../../../action';

export default function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  console.log(auth)
  const userLogin = (e) => {

    e.preventDefault();
    const user = {
      email, password
    }
    dispatch(login(user));

}

    if(auth.authenticate){
      return <Navigate to='/Crud' />
    }

  return (
    <div className="user signinBx">
          <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>
          <div className="formBx">
            <form onSubmit={userLogin}>
              <h2>Sign In</h2>
              <input type="text" name="email" placeholder="Username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) }/>
              <input type="submit" name="" value="Login" />
              <p className="signup">
                Don't have an account ?
                <a  onClick={()=>props.toggleForm()}>Sign Up.</a>
              </p>
            </form>
          </div>
    </div>
  )
}
