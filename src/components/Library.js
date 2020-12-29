import React, { Fragment, useState, useContext } from 'react'
import { useQuery, gql } from '@apollo/client';
import BookThumbnail from './BookThumbnail';
import Book from './Book';
import "../css/Library.css";
import '../css/BookThumbnail.css';
import { BookContext } from '../contexts/bookContext';
import Dropdown from './Dropdown';
import Loading from './Loading';

function Library() {
  const { page, filter } = useContext(BookContext);


  const books = gql`
  query GetBooks {
    books${filter}{
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



  return (
    <main>
      {loading
        ? <Loading />
        : page === 'list'
          ? <Fragment>
            <Dropdown />
            <div className='library-wrapper wrapper'>
              {data ? data.books.map(d => <BookThumbnail key={d.id} {...d} />) : null}
            </div>
          </Fragment>
          : <Book id={page} />}

    </main>
  )
}

export default Library
