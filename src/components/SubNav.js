import React, { useEffect, useContext, Fragment } from 'react';
import { useStarsForRating } from '../hooks/useStarsForRating';
import SubNavItem from './SubNavItem';

function SubNav(props) {

  const rating = [
    { id: 5, content: useStarsForRating(5) },
    { id: 4, content: useStarsForRating(4) },
    { id: 3, content: useStarsForRating(3) },
    { id: 2, content: useStarsForRating(2) },
    { id: 1, content: useStarsForRating(1) }
  ];

  const ratingJsx = rating.map((r, index) => <SubNavItem setShowNav={() => props.setShowNav()} type='rating' key={index} id={r.id} content={r.content} />)
  const genresJsx = props.genres.map((g, index) => <SubNavItem setShowNav={() => props.setShowNav()} type='genre' key={index} id={g.id} content={g.name} />)
  const authorsJsx = props.authors.map((a, index) => <SubNavItem setShowNav={() => props.setShowNav()} type='author' key={index} id={a.id} content={<Fragment><span>{a.firstName}</span> <span>{a.lastName}</span></Fragment>} />)
  const listJsx = props.subNav === 'author' ? authorsJsx : props.subNav === 'genre' ? genresJsx : ratingJsx;


  useEffect(() => {
    return () => props.setSubNav(null);
  }, [])


  return (
    <ul className={`sub-nav-wrapper sub-nav-${props.subNav}`}>
      {listJsx}
    </ul>
  )
}

export default SubNav;

