import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBook = (props) => {
  const { id } = useParams();
  const booktoupdate = props.books.filter((book) => book.id == id);
  const [{ title: a, author: b, summary: c, year: d }] = booktoupdate;
  // console.log(a, b, c, d);

  const [title, setTitle] = useState(a);
  const [author, setAuthor] = useState(b);
  const [summary, setSummary] = useState(c);
  const [year, setYear] = useState(d);
  const book = { id, title, author, summary, year };
  // For message alert
  const container = document.querySelector(".container");
  const inputs = document.querySelectorAll(".form-control");

  return (
    <div className='container w-75 m-auto'>
      <form
        id='book-form'
        onSubmit={(e) => props.editbook(e, book, container, inputs)}
      >
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            id='title'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Author</label>
          <input
            type='text'
            id='author'
            className='form-control'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Year Published:</label>
          <input
            type='number'
            id='isbn'
            className='form-control'
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className='form-group mt-3'>
          <label>Summary</label>
          <textarea
            className='form-control'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <input
          type='submit'
          value='Update Book'
          className='btn btn-primary submitBtn mt-3'
        />
      </form>
    </div>
  );
};

export default EditBook;
