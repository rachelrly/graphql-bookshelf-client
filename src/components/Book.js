import React, { Fragment, useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import AuthorBook from './AuthorBooks';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { BookContext } from '../contexts/bookContext';
import BookContent from './BookContent';
import Loading from './Loading';

function Book(props) {
  const { setPage, getBookById } = useContext(BookContext);

  const { data, loading } = useQuery(getBookById(props.id))

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