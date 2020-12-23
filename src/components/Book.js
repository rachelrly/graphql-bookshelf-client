import React, {Fragment, useEffect, useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import AuthorBook from './AuthorBooks';

function Book (props){
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
              title,
              published
              author{
                  firstName,
                  lastName
              }
          }
         
        }
      }
    }
  `

const {data} = useQuery(b)

    return(
<Fragment>

{data
    ?<div className='book-wrapper wrapper'>
    <div className='book-info-wrapper'>
        <h2>{data.book.title}</h2>
<p>By {data.book.author.firstName} {data.book.author.lastName}</p>
<p>Published {data.book.published}</p>
<p>Rating {data.book.rating}/5</p>
</div>

<AuthorBook author={data.book.author}/>
</div>
:null}
</Fragment>

    )
}

export default Book;