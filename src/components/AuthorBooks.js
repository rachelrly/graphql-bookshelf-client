import React from 'react';
import BookThumbnail from './BookThumbnail';

function AuthorBook(props) {

    return (
        <div className='author-books-wrapper'>
            <h3>Also by {props.author.firstName} {props.author.lastName}</h3>
            <div className='also-by-wrapper'>
                {props.author.books ? props.author.books.slice(0, 4).map((b, index) => <BookThumbnail key={index} {...b} />) : null}
            </div>
        </div>

    )
};

export default AuthorBook;