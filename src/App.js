import "./App.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header";
import Menu from "./components/menu";
import Cart from "./components/cart";
import Login from "./components/login";
import Register from "./components/register";
import Checkout from "./components/checkout";
import About from "./components/about";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProductDetails from "./components/productDetails";
import Section from "./components/sectionList";
import OrderComplete from "./components/orderComplete";
import MenuHeader from './components/menuHeader';
import GetAll from "./api/products";
export default function App () {

  const [products, setProducts] = useState([])
  React.useEffect(()=>{
    GetAll().then( data =>{setProducts(data)})
  },[])
  const [cart , setCart] = useState([])
  const logout = () => {
    window.localStorage.removeItem("user")
  }
  React.useEffect(()=>{
    const data = window.localStorage.getItem("cart");
    if(data){
      setCart(JSON.parse(data))
    }
    return window.localStorage.setItem("cart",[])
  },[])

  const addToCart = (id) => {
    const selectedItem = products.find(item => item.id == id)
    selectedItem.quantity = 1
    window.localStorage.setItem("cart",[...cart, selectedItem])
    setCart([...cart, selectedItem])
  }

  const resetCart =() => {
    window.localStorage.setItem("cart",[])
    setCart([])
  } 

  React.useEffect(()=>{
    window.localStorage.setItem("cart",JSON.stringify(cart))
    window.localStorage.setItem("total",JSON.stringify(total))
  })
  const RemoveFromCart = (id) => {
    const filteredCart = cart.filter(item => item.id !== id)
    setCart(filteredCart)
  }
  const toggleItem = (id) => {
    const itemInCart = cart.find(item => item.id === id)
    if(!itemInCart){
      addToCart(id)
    }else{
      RemoveFromCart(id)
    }
  }
  const increaseQuantity = (id) => {
    const editedCart = cart.map(item => {
      if(item.id === id ){
        item.quantity = item.quantity + 1
      }
      return item
    })
    setCart(editedCart)
  }
  const decreaseQuantity = (id) => {
    const editedCart = cart.map(item => {
      if(item.id === id ){
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1
        }
        else{
          item.quantity = item.quantity
        }
        
      }
      return item
    })
    setCart(editedCart)
  }

  const [total, setTotal] = useState(0)
  React.useEffect(() => {
    let itemTotal
    let cartTotal = 0
    const t = cart.map(item => {
      itemTotal= item.price * item.quantity
      cartTotal = cartTotal + itemTotal
      return cartTotal
    })
    setTotal(cartTotal);
  },[cart]);
  

  return(
    <React.Fragment>
      <Container className="App">
        <Router >
          <Header cart={cart} Logout = {logout} />
          <Route exact path = "/">
            <Menu addToCart ={addToCart} toggleItem ={toggleItem} list ={products} cart = {cart}/>
          </Route>
          <Route exact path = "/home">
            <Menu addToCart ={addToCart} toggleItem ={toggleItem} list ={products}cart = {cart}/>
          </Route>
          <Route path = "/About">
            <About />
          </Route>
          <Route path = "/ordercomplete">
            <OrderComplete />
          </Route>
          <Route path = "/cart">
            <Cart total={total}list = {cart} decreaseQuantity = {decreaseQuantity}increaseQuantity={increaseQuantity}RemoveFromCart ={RemoveFromCart}/>
          </Route>
          <Route path = "/login">
            <Login  total={total}list = {cart}/>
          </Route>
          <Route path = "/register">
            <Register  total={total}list = {cart} />
          </Route>
          <Route path = "/checkout">
            <Checkout resetCart ={resetCart}total={total}list = {cart} />
          </Route>
          <Route exact path = "/products/:id" >
            <ProductDetails toggleItem ={toggleItem} list ={products}cart = {cart}/>
          </Route>
          <Route exact path = "/section/:section" >
            <MenuHeader />
            <Section addToCart ={addToCart} toggleItem ={toggleItem} list ={products}cart = {cart}/>
          </Route>
        </Router>
      </Container>
    </React.Fragment>
  )
}
