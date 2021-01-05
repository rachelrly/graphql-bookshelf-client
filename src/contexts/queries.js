import { gql } from '@apollo/client';

export function useQueries() {

  const limitAmount = 18;

  const getBooksFilteredByGenre = (genreId, exclude = null, limit = limitAmount, offset = null) => gql`
  query GetBooksFilteredByGenre {
  genre(id: ${genreId}){
    books(exclude: ${exclude}, limit: ${limit}, offset: ${offset}){
      id,
      title,
      rating,
      genre{
        name
      }
      author{
        firstName,
        lastName
      }
    }
    
  }
}`
  const getBooksFilteredByAuthor = (authorId, exclude = null, limit = limitAmount, offset = null) => gql`
  query GetBooksFilteredByAuthor {
  author(id: ${authorId}){
    books(exclude: ${exclude}, limit: ${limit}, offset: ${offset}){
      id,
      title,
      rating,
      genre{
        name
      }
      author{
        firstName,
        lastName
      }
    }
    
  }
}`

  const getBooksFilteredByRating = (rating, limit = limitAmount, offset = null) => gql`
query GetBooksFilteredByRating {
  books(rating: ${rating}, limit: ${limit}, offset: ${offset}){
      id,
      title,
      rating,
      genre{
        name
      }
      author{
        firstName,
        lastName
      }
  }
}`

  const getBookById = (bookId, limit = 3, offset = null) => gql`
  query GetBookById {
    book(id:${bookId}){
      id,
      title,
      rating,
      genre{
        name, 
        books(exclude: ${bookId}, limit: ${limit}, offset: ${offset}){
          id,
          title,
          genre{
            name
          },
          author{
            firstName,
            lastName
          }
        }
      }
      published,
      author{
        firstName, 
        lastName,
        books(exclude: ${bookId}, limit: ${limit}, offset: ${offset}){
            id,
            title,
            genre{
              name
            },
            author{
                firstName,
                lastName
            }
        }
       
      }
    }
  }
  `

  const getAuthorsandGenres = () => gql`
  query GetAuthorsAndGenres{
    authors{
      id,
      firstName, 
      lastName
    },
    genres{
      id,
      name
    }
  }
  `

  const getBooks = (exclude = null, limit = limitAmount, offset = null) => gql`
  query GetBooks {
    books(exclude: ${exclude}, limit: ${limit}, offset: ${offset}){
      id,
      title,
      genre{
        name
      },
      rating,
      author{
        firstName, 
        lastName,
      }
    }
  }
`

  return {
    getBooksFilteredByRating,
    getBooksFilteredByAuthor,
    getBooksFilteredByGenre,
    getBooks,
    getAuthorsandGenres,
    getBookById
  }
}