import React, { useState } from 'react';

function Book(props) {
    // console.log(props);
    //THe book that you want to show on the modal in the parent component
    function Highlight(book) {
        props.updateState({ highlightBook: book })
    }

    return (
        <div className="book" style={{backgroundColor: props.item.color}}>
            <div className="BookTitle">{props.item.title}</div>
            <div className="BookAuthor">{props.item.author}</div>
            <div className="BookYear">Year: {props.item.year}</div>
            <button onClick={() => Highlight(props.item)}>Read more</button>
        </div>
    )
}

export default Book;