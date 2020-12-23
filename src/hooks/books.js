import { useQuery, gql } from '@apollo/client';

export const useGetAllBooks = () => {
  return gql`
      query GetBooks {
        books{
          id,
          title,
          rating,
          genre,
          published,
          author{
            firstName, 
            lastName
          }
        }
      }
    `

}