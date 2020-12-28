import React, { useState, Fragment } from 'react';
import SubNav from './SubNav';
import { useQuery, gql } from '@apollo/client';
import { useStarsForRating } from '../hooks/useStarsForRating';
import { TiArrowSortedDown } from 'react-icons/ti';
import '../css/nav.css';

function Dropdown() {
  const [showNav, setShowNav] = useState(false);
  const [subNav, setSubNav] = useState(null);

  const rating = [useStarsForRating(1), useStarsForRating(2), useStarsForRating(3), useStarsForRating(4), useStarsForRating(5)]

  if (!showNav && subNav) {
    setSubNav(null);
  }

  const a = gql`
  query GetAuthors {
    authors{
      id,
      firstName, 
      lastName
    }
  }
`

  let { data } = useQuery(a);



  const authors = data ? data.authors.map(a => <Fragment><span>{a.firstName}</span> <span>{a.lastName}</span></Fragment>) : [];

  return (
    <nav>
      <button className='nav-button' onClick={() => setShowNav(!showNav)}>Filter</button>
      {
        showNav
          ? <ul className='nav-wrapper'>
            <li
              className='nav-item'
              onClick={() => subNav !== 'author' ? setSubNav('author') : setSubNav(null)}
              onKeyPress={e => e.key === 'Enter' ? setSubNav('author') : null}
              tabIndex='0'
            >
              <TiArrowSortedDown className={subNav === 'author' ? 'nav-arrow-turned' : 'nav-arrow'} /><
                span>Authors</span>
            </li>
            <li
              className='nav-item'
              onClick={() => subNav !== 'genre' ? setSubNav('genre') : setSubNav(null)}
              onKeyPress={e => e.key === 'Enter' ? setSubNav('genre') : null}
              tabIndex='0'>
              <TiArrowSortedDown className={subNav === 'genre' ? 'nav-arrow-turned' : 'nav-arrow'} />
              <span>Genre</span>
            </li>
            <li
              className='nav-item'
              onClick={() => subNav !== 'rating' ? setSubNav('rating') : setSubNav(null)}
              onKeyPress={e => e.key === 'Enter' ? setSubNav('rating') : null}
              tabIndex='0'>
              <TiArrowSortedDown className={subNav === 'rating' ? 'nav-arrow-turned' : 'nav-arrow'} />
              <span>Rating</span>
            </li>
            {subNav
              ? <SubNav rating={rating} genre={rating} author={authors} subNav={subNav} setSubNav={(s) => setSubNav(s)} />
              : null}
          </ul>
          : null}

    </nav>

  )
}

export default Dropdown
