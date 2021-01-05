import React, { Fragment, useState, useContext, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client';
import BookThumbnail from './BookThumbnail';
import Book from './Book';
import "../css/Library.css";
import '../css/BookThumbnail.css';
import { BookContext } from '../contexts/bookContext';
import Dropdown from './Dropdown';
import Loading from './Loading';

function Library() {
  const [books, setBooks] = useState([])
  const { page, booksQuery, filterType } = useContext(BookContext);
  const { data, loading } = useQuery(booksQuery);


  useEffect(() => {
    if (data) {
      setBooks(!filterType ? data.books : filterType === 'genre' ? data.genre.books : data.author.books)
    }
  }, [data, filterType])



  return (
    <main>
      {loading
        ? <Loading />
        : page === 'list'
          ? <Fragment>
            <Dropdown />
            <div className='library-wrapper wrapper'>
              {books ? books.map(d => <BookThumbnail key={d.id} {...d} />) : null}
            </div>
          </Fragment>
          : <Book id={page} />}

    </main>
  )
}

export default Library
