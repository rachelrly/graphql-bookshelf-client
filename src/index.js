import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BookContextProvider } from './contexts/bookContext';

const client = new ApolloClient({
  uri: 'https://sleepy-bastion-12469.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
