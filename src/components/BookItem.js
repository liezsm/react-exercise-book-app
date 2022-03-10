import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";

const BookItem = (props) => {
  const styles = {
    textDecoration: "none",
    color: "inherit",
  };
  //   console.log(props);
  const { title, author, year, id } = props.data;
  const history = useHistory();

  const routechange = (bookstoupdate) => {
    // console.log(bookstoupdate);
    let path = `/editbook/${bookstoupdate.id}`;
    history.push(path);
  };

  return (
    <tr>
      <td>
        <Link to={`books/${id}`} style={styles}>
          {" "}
          {title}
        </Link>
      </td>
      <td>
        <Link to={`books/${id}`} style={styles}>
          {author}{" "}
        </Link>
      </td>
      <td>
        <Link to={`books/${id}`} style={styles}>
          {" "}
          {year}
        </Link>
      </td>
      <td>
        <button
          href='#'
          className=' btn btn-success  bg-opacity-50 btn-sm'
          onClick={() => routechange(props.data)}
        >
          {/* <Link to='/addbook' style={styles}> */}
          <FontAwesomeIcon icon={faEdit} />
          {/* </Link> */}
        </button>{" "}
      </td>

      <td>
        <button
          className=' btn btn-danger btn-sm delete'
          onClick={(e) => props.onDelete(e, id)}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
      </td>
    </tr>
  );
};

export default BookItem;
