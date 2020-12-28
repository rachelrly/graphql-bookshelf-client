import React from 'react';
import AuthorBook from './AuthorBooks'
import { useStarsForRating } from '../hooks/useStarsForRating';

function BookContent(props) {
  return (
    <div className='book-wrapper wrapper'>
      <div className={`book-info-wrapper ${props.book.genre}`}>
        <h2>{props.book.title}</h2>
        <p>By {props.book.author.firstName} {props.book.author.lastName}</p>
        <p>Published {props.book.published}</p>
        {useStarsForRating(Number(props.book.rating))}
      </div>
      {props.book.author.books.length > 1 ? <AuthorBook author={props.book.author} /> : null}
    </div>
  )
}

export default BookContent
