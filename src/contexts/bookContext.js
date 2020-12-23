import React, { useState, createContext } from 'react';

export const BookContext = createContext()

export function BookContextProvider({ children }) {

  const [page, setPage] = useState('list');

  const value = { page, setPage }

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}