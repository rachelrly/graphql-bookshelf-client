import React from 'react';
import AuthorBook from './AuthorBooks'
import { useStarsForRating } from '../hooks/useStarsForRating';

function BookContent(props) {
  return (
    <div className='book-wrapper wrapper'>
      <div className={`book-info-wrapper ${props.book.genre.name}`}>
        <h2>{props.book.title}</h2>
        <p>By {props.book.author.firstName} {props.book.author.lastName}</p>
        <p>Published {props.book.published}</p>
        <p>{props.book.genre.name}</p>
        {useStarsForRating(Number(props.book.rating))}
      </div>
      <AuthorBook author={props.book.author} genre={props.book.genre} />
    </div>
  )
}

export default BookContent
