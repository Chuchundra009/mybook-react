import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {

  const [books, setBooks] = useState(data);
  const [showText,setShowText] = useState(false);

  const removeBook = (id) => {
    let newBooks = books.filter(book => book.id !==id);
    setBooks(newBooks)
  }


  return (
    <div>
      {books.map((book => {
        const {id, author,nameBook,description,image } = book;
        return(<div key={id}>
          <div className='container'>
            <img src={image} width='300px' alt='nazvanie knigi'/>
          </div>
          <div className='container'>
            <h2>{author}</h2>
          </div>
          <div className='container'>
            <h4><i>{nameBook}</i></h4>
          </div>
          <div className='contText'>
            <p>{showText ? description: description.substring(0, 100) + '...'}<button className='showBtn' onClick={() => setShowText(!showText)}>{showText ? "показать меньше" : "показать больше"}</button></p>
          </div>
          <div className='container btn'>
            <button className='btnText' onClick={() => removeBook(id)}>Удалить</button>
          </div>
          </div>)
      }))}
      <div className='container'>
        <button className='btnDelete' onClick={() => setBooks([])}>Удалить всё</button>
      </div>
    </div>
  );
}

export default App;
