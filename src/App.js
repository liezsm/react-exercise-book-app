import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import BookDetails from "./components/BookDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const data = [
    {
      id: 1,
      title: "Deep Work",
      author: "Cal Newport",
      summary:
        "Deep Work: Rules for Focused Success in a Distracted World” by Cal Newport (Book Summary) Deep Work by Cal Newport is a book about the science of productivity. Cal argues the best way to get more meaningful work done is by working deeply – working in a state of high concentration without distractions on a single task",
      year: "2010",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      summary:
        "Nineteen Eighty-Four is a dystopian social science fiction novel and cautionary tale written by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
      year: "1950",
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      summary: "lorem ipusm",
      year: "2009",
    },
  ];

  const [books, setBooks] = useState(data);
  const [deleted, hasDeleted] = useState(false);
  const history = useHistory();

  function showAlert(message, className, parent, container, inputsToClear) {
    const div = document.createElement("div");
    div.className = `alert alert-${className} text-${className}`;
    div.appendChild(document.createTextNode(message));
    const form = document.querySelector(`${parent}`);
    container.insertBefore(div, form);

    setTimeout(() => {
      container.removeChild(div);
      inputsToClear.forEach((i) => {
        i.value = "";
      });
    }, 1500);
  }

  function showMessageDeleteItem(message, className) {
    const parent = document.querySelector(".App");
    const container = parent.firstChild;
    const table = container.firstElementChild;

    const div = document.createElement("div");
    div.className = `text-center alert alert-${className} text-${className}`;
    div.appendChild(document.createTextNode(message));
    container.insertBefore(div, table);

    setTimeout(() => {
      container.removeChild(div);
    }, 1500);
  }
  const addbook = (e, newBook, container, inputs) => {
    e.preventDefault();
    console.log(inputs);
    setBooks((prevBooks) => [...prevBooks, newBook]);
    showAlert(
      "Added successfully",
      "success",
      `#${e.target.id}`,
      container,
      inputs
    );
  };

  const editbook = (e, updatebook, container, inputs) => {
    e.preventDefault();
    setBooks((prevBooks) => {
      return prevBooks.map((book) => {
        if (book.id == updatebook.id) {
          return {
            ...updatebook,
          };
        }
        return book;
      });
    });
    showAlert(
      "Updated successfully",
      "success",
      `#${e.target.id}`,
      container,
      inputs
    );
  };

  const onDelete = (e, id) => {
    setBooks((prevBooks) => {
      return prevBooks.filter((book) => book.id !== id);
    });
    showMessageDeleteItem("Deleted successfully", "success");
    hasDeleted(true);
  };

  return (
    <Router>
      <NavBar />
      <div className='App'>
        <Switch>
          <Route exact path='/react-exercise-book-app'>
            <Home books={books} onDelete={onDelete} />
          </Route>

          <Route path='/react-exercise-book-app/addbook'>
            <AddBook books={books} addbook={addbook} />
          </Route>

          <Route path='/react-exercise-book-app/books/:id'>
            <BookDetails books={books} />
          </Route>

          <Route path='/react-exercise-book-app/editbook/:id'>
            <EditBook books={books} editbook={editbook} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
