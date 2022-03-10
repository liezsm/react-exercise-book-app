import BookItem from "./BookItem";

const AllBooks = ({ books, onDelete }) => {
  const bookItems = books.map((book) => (
    <BookItem key={book.id} data={book} onDelete={onDelete} />
  ));
  return (
    <>
      <tbody id='book-list'>{bookItems}</tbody>
    </>
  );
};

export default AllBooks;
