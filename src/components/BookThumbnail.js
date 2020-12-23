import React, { useContext } from 'react';
import '../css/BookThumbnail.css';

import { BookContext } from '../contexts/bookContext';

function BookThumbnail(props) {
    const { setPage } = useContext(BookContext);
    console.log(props.id)

    return (
        <div className='book-thumb-wrapper'
            onClick={() => setPage(props.id)}
            onKeyPress={e => e.key === 'Enter' ? setPage(props.id) : null}
            tabIndex='0'>
            <p className='book-thumb-title'>{props.title}</p>
            <p>{props.author.firstName} {props.author.lastName}</p>
        </div>

    )
};

export default BookThumbnail;