
import '../App.css';
import * as React from 'react';
import List from './list';
import { useParams } from 'react-router-dom';

const Section = ({cart,toggleItem,list}) => {
  const {section} = useParams() 
  const categories = ['offers','beef', 'chicken','fish', 'side-item','beverages','happy-meal','desserts','breakfast','mcCafe']
  const filteredList = list.filter(item => { 
    if(section === 'offers'){return item.hasOffer === true}
    else {return item.category === section}
  })

  return (
    <React.Fragment>
      {categories.includes(section)?
      <ul>
        <li>
          <List className="list"cart={cart} toggleItem ={toggleItem} list = {filteredList} listName = {section}/> 
        </li>
      </ul>
      : <p>
        404
      </p>
      }
    </React.Fragment>
  )
}

export default Section

