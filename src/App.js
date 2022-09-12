import "./style.scss";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";

import { Navbar, Container, Row, Col } from 'react-bootstrap'
import AddBook from "./components/addbook/AddBook";
import BooksList from "./components/booksList/BooksList";

function App() {
  const { currentUser } = useContext(AuthContext);

  const [bookId, setBookId] = useState('')

  const handleBookId = (id) => {
    setBookId(id)
    // console.log(id)
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">
            Books Management App By Felix B.
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ width: "60vw" }}>
        <Row>
          <Col>
            <AddBook bookId={bookId} setBookId={setBookId} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BooksList getBookId={handleBookId} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
