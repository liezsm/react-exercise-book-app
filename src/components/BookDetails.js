import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const BookDetails = (props) => {
  const { id } = useParams();
  const book = props.books.filter((b) => b.id == id);
  const [{ title, author, summary, year }] = book;

  return (
    <div className='book-details mt-5'>
      <div className='card w-75 m-auto'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{summary}</p>
        </div>
        <div className='card-footer text-muted'>
          Written by:{author}
          <small className='d-block'>{year} </small>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
