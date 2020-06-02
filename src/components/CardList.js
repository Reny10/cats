import React from 'react';
import Card from './Card';
import './cardlist.css';

const CardList = ({ cats }) => {
console.log('CardList')
return(
<div className='card-list'> {
  cats.map((user, i) => {
  return ( <Card key={i} id={cats[i].id} name={cats[i].name} email={cats[i].email}/> );
})
}
 </div>
 );
}
export default CardList;