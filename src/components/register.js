import '../App.css';
import * as React from 'react';
import {Link, Redirect } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = React.useState({})
  const [usersArray, setUsersArray] = React.useState([]);
  React.useEffect(()=>{
    const users = localStorage.getItem('users');
    if(users){
      setUsersArray(JSON.parse(users))
    }
  },[])

  const [authenticated,setAuthenticated] = React.useState(false)
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
      window.localStorage.setItem('user',JSON.stringify(user))
      window.localStorage.setItem('users',JSON.stringify([...usersArray,user]))
      window.localStorage.setItem('auth',JSON.stringify('true'))
      setAuthenticated(true)
  }
  const [name,setName] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [phone,setPhone] = React.useState('')
  const [password,setPassword] = React.useState('')

  const setNameValue = (event) => {
    setName(event.target.value)
    setUser({...user,'name': event.target.value})
  }
  const setPhoneValue = (event) => {
    setPhone(event.target.value)
    setUser({...user,'phone': event.target.value})
  }
  const setEmailValue = (event) => {
    setEmail(event.target.value)
    setUser({...user,'email': event.target.value})
  }
  const setPasswordValue = (event) => {
    setPassword(event.target.value)
    setUser({...user,'password': event.target.value})
  }

  if(authenticated === true){
    return (<Redirect to='/checkout'/>)
  }
    return (
      <div>
          <form onSubmit={handleRegisterSubmit}>
            <input 
              value ={name} onChange ={setNameValue} 
              type="text" placeholder="Name" className="form-control input" />
            <input 
              value ={email} onChange ={setEmailValue} 
              type="email" placeholder="Email" className="form-control input" />
            <input 
              value ={phone} onChange ={setPhoneValue} 
              type="text" placeholder="phone" className="form-control input" />
            <input 
              value ={password} onChange ={setPasswordValue} 
              type="password" placeholder="password" className="form-control input" />
            <button 
              id="submit" 
              className="btn btn-primary btn-circle btn-lg button-submit"
              type="submit"
              >Register
            </button>
          </form>
          <p>Have account? you can<Link to='/login'>Login</Link></p>
      </div>
    )
  
}

export default Register

