import React from 'react';
import BookThumbnail from './BookThumbnail';

function AuthorBook(props) {

    const arr = props.author.books.length >= 2
        ? { type: 'author', books: props.author.books }
        : { type: 'genre', books: props.genre.books }

    return (
        <div className='author-books-wrapper'>
            { arr.type === 'author'
                ? <h3>Also by {props.author.firstName} {props.author.lastName}</h3>
                : <h3>Also in {props.genre.name}</h3>}
            <div className='also-by-wrapper'>
                {arr.books.map((b, index) => <BookThumbnail key={index} {...b} />)}
            </div>
        </div>

    )
};

export default AuthorBook;