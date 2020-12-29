import React, { useState, createContext } from 'react';

export const BookContext = createContext()

export function BookContextProvider({ children }) {

  const [page, setPage] = useState('list');
  const [filter, setFilter] = useState(null);

  const value = { page, setPage, filter, setFilter }

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}