import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
console.log('SearchBox')
  return (
    <div className='pa2'>
   <input aria-label='Search cats'
          className='pa3 ba b--green bg-lightest-blue' type='search'
          placeholder='Search cats'onChange={searchChange}/>
    </div>
  );
}
export default SearchBox;

