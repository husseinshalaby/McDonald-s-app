import '../App.css';
import * as React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Loading from './loading';

const Checkout = ({resetCart}) => {
  const [cart, setCart] = React.useState([])
  const [total, setTotal] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const [done, setDone] = React.useState(false)
    React.useEffect(()=>{
      const cart = window.localStorage.getItem('cart');
      if(cart){
        setCart(JSON.parse(cart))
      }
      const total = window.localStorage.getItem('total');
      if(total){
        setTotal(JSON.parse(total))
      }
    },[]) 
    const [specialRequest, setSpecialRequest] = React.useState('')
    const setSpecialRequestValue = (event) => {
      setSpecialRequest(event.target.value)
    } 
    const handleCheckoutSubmit = (event) => {
      event.preventDefault();
      setLoading(true)
      setTimeout(()=>{
        window.localStorage.setItem('cart',[])
        setCart([])
        setLoading(false)
        resetCart()
        setDone(true)
      },1000)
    }
  if (loading === true){
    return(<Loading text = 'Ordering'/>)
  }
  else if (done===true){
    return (<Redirect to='/orderComplete'/>)
  }else{
    return (
      <div >
         <ul className ='event-bubbling'>  
          {
            cart.map((item) =>  {
              return (
                <li  key ={item.id}> 
                  <p>item-name: {item.name}</p>
                  <p>item-category: {item.category}</p>
                  <p>item-price: {item.price}</p>
                  <p>item-quantity: {item.quantity}</p>
                  <p>item-totalprice: {item.price * item.quantity}</p>
                </li>
              )
            })
          }
        </ul>
        <p>total: {total}</p>
        <p>tax: {total/10}</p>
        <p>total after tax: {total + total/10}</p>
        <form onSubmit={handleCheckoutSubmit}>
          <textarea  
          name = "details" 
          value ={specialRequest} 
          onChange ={setSpecialRequestValue}
          className="form-control textarea" 
          rows="3" 
          placeholder="Special Request"
          ></textarea>
          <button 
            id="submit" 
            className="btn btn-primary btn-circle btn-lg button-submit"
            type="submit"
            >place order
          </button>
          </form>
          <p>Login with deffernt account <Link to='/login'>login</Link></p>
      </div>
    )
  }
  
}

export default Checkout