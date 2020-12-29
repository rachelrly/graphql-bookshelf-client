import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookContext';


function SubNavItem(props) {
  const { filter, setFilter } = useContext(BookContext)

  const handleSetFilter = () => {
    if (filter !== props.queryString) {
      setFilter(props.queryString)
    }
    props.setShowNav();
  }
  return (
    <li className='sub-nav-item'
      tabIndex='0'
      onClick={() => handleSetFilter()}
      onKeyPress={e => e.key === 'Enter' ? handleSetFilter() : null}><span>{props.content}</span></li>
  )
}

export default SubNavItem
