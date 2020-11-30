import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import BooksFile from '../assets/childrensbooks.json';
import Book from './Book';
import Modal from './Modal';
import useCustomHookModalHistory from './customHookModalHistory';
import '../css/style.css';


function App(props){
    const [books, setBooks] = useState(null);
    const [bookFocus, setBookFocus] = useState('');
    const [toggleModal, setToggleModal] = useState(false);
    const [customHookModalHistoryState, setCustomHookModalHistoryState] = useCustomHookModalHistory(null);

    //Close the modal
    function closeModal(book) {
        setToggleModal(false);
    }
    
    //Open modal and the bokus that is on focus
    function showModal(book) {
        setToggleModal(true);//Toggle the modal
        setBookFocus(book.highlightBook);//Current book object to be highlighted by modal
        setCustomHookModalHistoryState(book.highlightBook.title);//Save the object to modal history
        // console.log(customHookModalHistoryState);
    }

    //Kör useEffect en gång vid första renderingen samma som livscykelmetoden componentDidMount
    useEffect(() => {
        async function getTodos() {
            const data = await (BooksFile);
            setBooks(data);
        }

        getTodos();
    }, []);

    //Kör useEffect varje gång som todos uppdateras
    // useEffect(() => {

    // }, [books]);

    return (
        <article className="todo-app">
            <h1>{props.title}</h1>
            <div>
                <h2>Search history</h2>
                <ul className="search-history">
                    {customHookModalHistoryState.map(title => <li>{title}</li>)}
                </ul>
            </div>

            <div>
                <h2>All Books</h2>
                <div className="book-wrapper">
                    { books && books.map((book, index) => {
                        return <Book item={ book } key={ index } updateState={ showModal } />
                    }) }
                </div>
            </div>
            {/* Show modal with current book as a parameter */}
            { toggleModal ? <Modal toggleModalState={ closeModal } book={bookFocus}/> : false }
        </article>
    )
}


ReactDOM.render(<App title="Todo" />, document.getElementById('root'));