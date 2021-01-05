import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookContext';


function SubNavItem(props) {
  const {
    getBooksFilteredByRating,
    getBooksFilteredByGenre,
    getBooksFilteredByAuthor,
    setBooksQuery,
    setFilterType } = useContext(BookContext)

  // const query = props.type === 'rating' ? setBooksFilteredByRating 
  const handleSetQuery = () => {
    let books;
    if (props.type === 'rating') {
      setBooksQuery(getBooksFilteredByRating(props.id));
    }
    else if (props.type === 'genre') {
      setFilterType('genre')
      setBooksQuery(getBooksFilteredByGenre(props.id))
    }
    else {
      setFilterType('author')
      setBooksQuery(getBooksFilteredByAuthor(props.id))
    }
  }
  return (
    <li className='sub-nav-item'
      tabIndex='0'
      onClick={() => handleSetQuery()}
      onKeyPress={e => e.key === 'Enter' ? handleSetQuery() : null}><span>{props.content}</span></li>
  )
}

export default SubNavItem
