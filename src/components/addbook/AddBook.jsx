import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../../services/book.services";

const AddBook = ({ bookId, setBookId }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [status, setStatus] = useState('Available')
    const [statusFlag, setStatusFlag] = useState(true)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        if (title === '' || author === '') return setError({ message: "Please fillout all the fileds." })

        const newBook = {
            title,
            author,
            status
        }

        try {

            if (!bookId) {
                await BookDataService.add(newBook)
                setSuccess({ message: 'Book added successfully.' })
            } else {
                await BookDataService.update(bookId, newBook)
                setSuccess({ message: 'Book edited successfully.' })
                setBookId('')
            }
            setTitle('')
            setAuthor('')
        }
        catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        if (bookId) {
            getBookDoc()
        }
    }, [bookId])

    async function getBookDoc() {
        try {
            const book = await BookDataService.get(bookId)
            var data = book.data()
            console.log(data)
            setTitle(data.title)
            setAuthor(data.author)
            setStatus(data.status)
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div className="p-4 box">
                {error?.message && (
                    <Alert
                        variant="danger"
                        dismissible
                        onClose={() => setError(null)}
                    >
                        {error.message}
                    </Alert>
                )}
                {success?.message && (
                    <Alert
                        variant="success"
                        dismissible
                        onClose={() => setSuccess(null)}
                    >
                        {success.message}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBookTitle">
                        <InputGroup>
                            <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Book Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBookAuthor">
                        <InputGroup>
                            <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Book Author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                    <ButtonGroup aria-label="Basic example" className="mb-3">
                        <Button
                            disabled={statusFlag}
                            variant="success"
                            onClick={(e) => {
                                setStatus("Available");
                                setStatusFlag(true);
                            }}
                        >
                            Available
                        </Button>
                        <Button
                            variant="danger"
                            disabled={!statusFlag}
                            onClick={(e) => {
                                setStatus("Not Available");
                                setStatusFlag(false);
                            }}
                        >
                            Not Available
                        </Button>
                    </ButtonGroup>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Add/ Update
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default AddBook;