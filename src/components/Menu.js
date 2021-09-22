import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function Menu() {
  return (
    <ListGroup className='my-3'>
      <Link to="/" tag="a" className="list-group-item list-group-item-action " action>
        Home
      </Link>
      <Link
        to="/view-courses"
        className="list-group-item list-group-item-action "
        action
        tag="a"
      >
        All Courses
      </Link>
      <Link
        to="/add-course"
        className="list-group-item list-group-item-action "
        action
        tag="a"
      >
        Add Courses
      </Link>
    </ListGroup> 
  );
}

export default Menu;
