import React from 'react';

function Modal(props) {
    // console.log(props);
    function closeModal() {
        props.toggleModalState();
    }

    // console.log(props.book);
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="closeModal">
                    <button onClick={() => closeModal()}>Close modal!</button>
                </div>
                <h2>{props.book.title}</h2>
                <small>{props.book.author}</small>
                <p>{props.book.plot}</p>
                {/* <p>Book Object: { bookFocus.title }</p> */}
            </div>
        </div>
    )
}

export default Modal;