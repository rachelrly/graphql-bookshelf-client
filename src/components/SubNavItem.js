import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookContext';


function SubNavItem(props) {
  const cool = useContext(BookContext)

  const handleSetQuery = () => {
    return;
  }
  return (
    <li className='sub-nav-item'
      tabIndex='0'
      onClick={() => handleSetQuery()}
      onKeyPress={e => e.key === 'Enter' ? handleSetQuery() : null}><span>{props.content}</span></li>
  )
}

export default SubNavItem
