import '../App.css';
import * as React from 'react';
import Item from './item';

const List = ({cart,toggleItem,list, listName}) => {

  return (
    <div>
      <h2>{listName}</h2>         
      <ul className ='event-bubbling'>       
        { 
          list.map((item) =>  {
            return (
              <li className = {'child'} key ={item.id}> 
                <Item 
                  cart={cart}
                  toggleItem ={toggleItem}
                  name = {item.name}
                  price = {item.price}
                  image = {item.image}
                  id={item.id}
                  inCart = {item.inCart}
                />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List

