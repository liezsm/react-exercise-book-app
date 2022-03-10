import AllBooks from "./AllBooks";

const Home = (props) => {
  return (
    <div>
      <table className='table table-hover  mt-5 w-75 m-auto '>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>
        <AllBooks books={props.books} onDelete={props.onDelete} />
      </table>
    </div>
  );
};

export default Home;
