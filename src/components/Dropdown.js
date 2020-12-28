import React, { useState } from 'react';
import SubNav from './SubNav';
import { useStarsForRating } from '../hooks/useStarsForRating';
import { TiArrowSortedDown } from 'react-icons/ti'
import '../css/nav.css';

function Dropdown() {
  const [showNav, setShowNav] = useState(false);
  const [subNav, setSubNav] = useState('');

  //get data for 
  //author list
  //genre list
  const rating = [useStarsForRating(1), useStarsForRating(2), useStarsForRating(3), useStarsForRating(4), useStarsForRating(5)]

  return (
    <nav>
      <button className='nav-button' onClick={() => setShowNav(!showNav)}>Filter</button>
      {
        showNav
          ? <ul className='nav-wrapper'>
            <li
              className='nav-item'
              onClick={() => setSubNav('author')}
              onKeyPress={e => e.key === 'Enter' ? setSubNav('author') : null}
              tabIndex='0'
            >
              <TiArrowSortedDown /><
                span>Authors</span>
            </li>
            <li
              className='nav-item'
              onClick={() => setSubNav('genre')}
              onKeyPress={e => e.key === 'Enter' ? setSubNav('genre') : null}
              tabIndex='0'>
              <TiArrowSortedDown />
              <span>Genre</span>
            </li>
            <li
              className='nav-item'
              onClick={() => setSubNav('rating')}
              onKeyPress={e => e.key === 'Enter' ? setSubNav('rating') : null}
              tabIndex='0'>
              <TiArrowSortedDown />
              <span>Rating</span>
            </li>
            {subNav ? <SubNav rating={rating} genre={rating} author={rating} subNav={subNav} setSubNav={(s) => setSubNav(s)} /> : null}
          </ul>
          : null
      }

    </nav>

  )
}

export default Dropdown
