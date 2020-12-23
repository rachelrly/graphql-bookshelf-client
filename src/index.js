import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});
client
  .query({
    query: gql`
      query GetBooks {
        books{
          title,
          rating,
          published,
          author{
            firstName, 
            lastName
          }
        }
      }
    `
  })
  .then(result => console.log(result.data));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
