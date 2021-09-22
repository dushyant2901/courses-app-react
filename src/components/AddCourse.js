import React from "react";
import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import Data from "./Data";
function AddCourse() {
    const [Courses, setCourse] = useState({})
  const submitHandler=(e)=>{e.preventDefault()
    console.log(Courses)
  postDataToServer()
  console.log(Courses)
  console.log(Data)
 
}

  function postDataToServer(){
Data.push(Courses)
 
  }
  return (


    <div>
      <Form onSubmit={submitHandler} className='my-3'>
        <FormGroup >
          <Label for="courseId">Course Id</Label>
          <Input
          required
            type="text"
            name="courseId"
            id="courseId"
            placeholder="Enter here"
          onChange={(e)=>{setCourse({...Courses,id:Number(e.target.value)})}}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Title">Course Title</Label>
          <Input
          required
            type="text"
            name="Title"
            id="Title"
            placeholder="Enter Title here"
            onChange={(e)=>{setCourse({...Courses,title:e.target.value})}}
          />
        </FormGroup>

        <FormGroup>
          <Label for="course-description">Course Description</Label>
          <Input
          required
            type="textarea"
            name="text"
            id="course-description"
            placeholder="Enter Course description here"
            onChange={(e)=>{setCourse({...Courses,description:e.target.value})}}
          />
        </FormGroup>
<Container>
        <Button type="submit" color="primary">Add Course</Button>
        <Button color="warning mx-3">Clear</Button>
        </Container>
      </Form>
    </div>
  );
}

export default AddCourse;
