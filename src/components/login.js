import '../App.css';
import * as React from 'react';
import {Link, Redirect } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = React.useState({})
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  let isUser = false;
  const checkUser = (user, users) =>{
    users.filter(i =>{
      if(i.email === user.email && i.password ===i.password){
        isUser = true
        setUser(i)
      }
    })
  }
  const [usersArray, setUsersArray] = React.useState([]);
  React.useEffect(()=>{
    const users = localStorage.getItem('users');
    if(users){
      setUsersArray(JSON.parse(users))
    }
  },[])

  const [authenticated,setAuthenticated] = React.useState(false)
  const handleLoginSubmit = (event) => {
    console.log('submit')
    event.preventDefault();

    checkUser(user,usersArray)
    if(isUser === false){
      window.alert('This email and password combination is incorrect try again!')
    }else{
      window.localStorage.setItem('user',JSON.stringify(user))
      window.localStorage.setItem('auth',JSON.stringify('true'))
      setAuthenticated(true)
    }
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
        <form onSubmit={handleLoginSubmit}>
          <input 
           value ={email} onChange ={setEmailValue}
          id="input" type="text" placeholder="email" className="form-control input" />
          <input 
          value = {password} onChange = {setPasswordValue}
          id="input" type="password" placeholder="password" className="form-control input" />
          <button 
            id="submit" 
            className="btn btn-primary btn-circle btn-lg button-submit"
            type="submit"
            > Login
          </button>
        </form>
        <p>New user? you can<Link to='/register'>Register</Link></p>
      </div>
    )
}

export default Login




