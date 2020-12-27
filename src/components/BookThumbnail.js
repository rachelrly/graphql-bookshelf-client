import React, { useContext } from 'react';
import '../css/BookThumbnail.css';

import { BookContext } from '../contexts/bookContext';

function BookThumbnail(props) {
    const { setPage } = useContext(BookContext);

    return (
        <div className={`book-thumb-wrapper ${props.genre}`}
            onClick={() => setPage(props.id)}
            onKeyPress={e => e.key === 'Enter' ? setPage(props.id) : null}
            tabIndex='0'>
            <p className='book-thumb-title'>{props.title}</p>
            <p>{props.author.firstName} {props.author.lastName}</p>
        </div>

    )
};

export default BookThumbnail;