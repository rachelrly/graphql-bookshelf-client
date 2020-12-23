import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, useQuery, ApolloProvider, InMemoryCache, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://sheltered-harbor-20336.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
