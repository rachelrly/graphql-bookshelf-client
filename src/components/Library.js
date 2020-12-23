import React, { Fragment, useEffect, useContext } from 'react'
import { useQuery, gql } from '@apollo/client';
import BookThumbnail from './BookThumbnail';
import Book from './Book';
import "../css/Library.css";
import '../css/BookThumbnail.css';
import { BookContext } from '../contexts/bookContext';

function Library() {
  const { page, setPage } = useContext(BookContext);

  const books = gql`
  query GetBooks {
    books{
      id,
      title,
      genre,
      rating,
      author{
        firstName, 
        lastName,
       
      }
    }
  }
`
  const { data, loading } = useQuery(books)
  console.log(data)


  return (
    <Fragment>
      {page === 'list'
        ? <div className='library-wrapper wrapper'>
          {data ? data.books.map(d => <BookThumbnail key={d.id} {...d} />) : null}
        </div>
        : <Book id={page} />}
    </Fragment>
  )
}

export default Library
