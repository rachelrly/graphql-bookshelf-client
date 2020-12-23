import React, {Fragment, useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import BookThumbnail from './BookThumbnail';
import Book from './Book';
import '../css/BookThumbnail.css';

function Library() {

  const [showBook, setShowBook] = useState(null)

  const books = gql`
  query GetBooks {
    books{
      id,
      title,
      rating,
      genre,
      published,
      author{
        firstName, 
        lastName,
       
      }
    }
  }
`

const {data} = useQuery(books)

  return (
<Fragment>
    {!showBook
    ? <div className='library-wrapper wrapper'>
    {data ? data.books.map(d => <BookThumbnail setShowBook={() => setShowBook(d.id)} key={d.id} {...d} />) : null}
    </div>
    : <Book id={showBook}/>}
    </Fragment>
  )
}

export default Library
