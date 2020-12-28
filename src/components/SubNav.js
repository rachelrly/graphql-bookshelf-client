import React, { useEffect } from 'react'
import { useAuthorDataAsList } from '../hooks/hooks';

function SubNav(props) {

  useEffect(() => {
    return () => props.setSubNav(null)
  }, [])

  const arr = props.subNav === 'author' ? props.author : props.subNav === 'genre' ? props.genre : props.rating

  return (
    <ul className={`sub-nav-wrapper sub-nav-${props.subNav}`}>
      {arr.map((a, index) =>
      (<li className='sub-nav-item'
        key={index}
        tabIndex='0'
        onClick={() => { }}
        onKeyPress={e => e.key === 'Enter' ? () => { } : null}><span>{a}</span></li>))}
    </ul>
  )
}

export default SubNav
