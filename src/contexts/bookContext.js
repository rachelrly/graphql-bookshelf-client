import React, { useState, createContext, useEffect } from 'react';
import { gql } from '@apollo/client';
import { useQueries } from './queries';

export const BookContext = createContext()

export function BookContextProvider({ children }) {
  const {
    getBooks,
    getBooksFilteredByAuthor,
    getBookById,
    getAuthorsandGenres,
    getBooksFilteredByGenre,
    getBooksFilteredByRating
  } = useQueries();

  const [page, setPage] = useState('list');
  const [filterType, setFilterType] = useState(null);

  if (page !== 'list' && filterType) {
    setFilterType(null)
  }

  const [booksQuery, setBooksQuery] = useState(getBooks());

  const value = {
    page,
    setPage,
    filterType,
    setFilterType,
    booksQuery,
    setBooksQuery,
    getBooksFilteredByAuthor,
    getBooksFilteredByGenre,
    getBooksFilteredByRating,
    getBooks,
    getBookById,
    getAuthorsandGenres,
  }



  return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}