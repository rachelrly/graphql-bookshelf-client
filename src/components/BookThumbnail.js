import React from 'react';
import '../css/BookThumbnail.css';

function BookThumbnail(props){


    return(
        <div className='book-thumb-wrapper' onClick={()=>props.setShowBook()}>
            <p className='book-thumb-title'>{props.title}</p>
            <p>{props.author.firstName} {props.author.lastName}</p>
            <p>({props.published})</p>
        </div>

    )
};

export default BookThumbnail;