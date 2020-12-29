import React, { Fragment, useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import AuthorBook from './AuthorBooks';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { BookContext } from '../contexts/bookContext';
import BookContent from './BookContent';
import Loading from './Loading';

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
          books(exclude: ${props.id}){
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

  const { data, loading } = useQuery(b)
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
      {loading
        ? <Loading />
        : data
          ? <BookContent {...data} />
          : null}
    </Fragment>

  )
}

export default Book;