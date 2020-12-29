import React, { useState, Fragment } from 'react';
import SubNav from './SubNav';
import { TiArrowSortedDown } from 'react-icons/ti';
import '../css/nav.css';
import { useQuery, gql } from '@apollo/client';

function Dropdown() {
  const [showNav, setShowNav] = useState(false);
  const [subNav, setSubNav] = useState(null);

  if (!showNav && subNav) {
    setSubNav(null);
  }

  const a = gql`
  query GetAuthors {
    authors{
      id,
      firstName, 
      lastName
    },
    genres{
      id,
      name
    }
  }
`
  const { data } = useQuery(a);


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
            {subNav && data
              ? <SubNav authors={data.authors} genres={data.genres} setShowNav={() => setShowNav(!showNav)} subNav={subNav} setSubNav={(s) => setSubNav(s)} />
              : null}
          </ul>
          : null}

    </nav>

  )
}

export default Dropdown
