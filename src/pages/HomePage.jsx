import React, { useState } from 'react';
import { MainLayout } from '../components';
import { Form, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function HomePage() {
    const [list, setList] = useState([]);
    const [text, setText] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        setList([...list, text]);
    };    
    
    return (
        <MainLayout>
            <Card>
                <Card.Header>
                    <h1 className="mb-0">Welcome to the home page</h1>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">ToDo List</p>
          
                    <Form onSubmit={onSubmit} className="mb-3 d-flex gap-2">
                        <Form.Control
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Add Task"
                        />
                        <button type="submit" className="btn btn-primary">Add</button>
                    </Form>
          
                    <ListGroup>
                        {list.map((item, index) => (
                            <ListGroupItem key={index}>{item}</ListGroupItem>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </MainLayout>        
    );
}

export default HomePage;