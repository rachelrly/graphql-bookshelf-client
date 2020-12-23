import React, { Fragment, useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import AuthorBook from './AuthorBooks';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { BookContext } from '../contexts/bookContext';

function Book(props) {
  const { setPage } = useContext(BookContext);

  const b = gql`
    query GetBook {
      book(id:${props.id}){
        id,
        title,
        rating,
        genre,
        published,
        author{
          firstName, 
          lastName,
          books{
              id,
              title,
              genre,
              author{
                  firstName,
                  lastName
              }
          }
         
        }
      }
    }
  `

  const { data } = useQuery(b)
  //if author books.length > 3
  //
  return (
    <Fragment>
      <div className='back-button-wrapper'>
        <IoIosArrowRoundBack
          onClick={() => setPage('list')}
          onKeyPress={e => e.key === 'Enter' ? setPage('list') : null}
          className='back-button'
          tabIndex='0' />
      </div>
      {data
        ? <div className='book-wrapper wrapper'>
          <div className={`book-info-wrapper ${data.book.genre}`}>
            <h2>{data.book.title}</h2>
            <p>By {data.book.author.firstName} {data.book.author.lastName}</p>
            <p>Published {data.book.published}</p>
            <p>Rating {data.book.rating}/5</p>
          </div>
          {data.book.author.books.length > 1 ? <AuthorBook author={data.book.author} /> : null}
        </div>
        : null}
    </Fragment>

  )
}

export default Book;