import '../App.css';
import * as React from 'react';
import List from './list';
import MenuHeader from './menuHeader';

const Lists = ({cart,toggleItem,list}) => {

  const categories = ['beef', 'chicken','fish', 'side-item','beverages','happy-meal','desserts','breakfast','mcCafe']
  const offers = list.filter(item => item.hasOffer === true)
  return (
    <React.Fragment>
      <MenuHeader />
      <ul>
        <li>
          <List className="list"cart={cart} toggleItem ={toggleItem} list = {offers} listName = 'offers'/> 
        </li>
          {
            categories.map(category=>{
              const filteredList = list.filter(item=>item.category===category)
              return(
                <li>
                  <List 
                  cart={cart} 
                  toggleItem ={toggleItem} 
                  list = {filteredList} 
                  listName = {category}/> 
                </li>
              )
            })
          }
      </ul>
    </React.Fragment>
  )
}

export default Lists
