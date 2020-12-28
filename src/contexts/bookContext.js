import React, { useState, createContext } from 'react';

export const BookContext = createContext()

export function BookContextProvider({ children }) {

  const [page, setPage] = useState('list');
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(false);

  //have filter here,
  //clear filter when unmounting library component to book component


  const value = { page, setPage, filter, setFilter, loading, setLoading }

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}