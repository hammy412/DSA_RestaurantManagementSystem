import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MenuItem(props) {
    return (
        <Card style={{ width: '18rem' }} className="text-center">
            <Card.Img className="menu-item-img" variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>${props.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}