import React from 'react'
import {
    Card,  CardText, CardBody,
    CardTitle,Container, Button
  } from 'reactstrap';
//   import '/.Course.css'
import Data from './Data';
function Course({course,update}) {
  const deleteCourse=(index)=>{
Data.splice(index,1)
update()
  }
    return (
        <div>
           <Card className="text-center my-3 " color="danger">
       
        <CardBody>
          <CardTitle tag="h5" >{course.title}</CardTitle>
          
          <CardText >{course.description}</CardText>
         <Container >
          <Button color="warning ">Update</Button>
          <Button color="danger " className="mx-3" onClick={()=>{deleteCourse(course.id)}}>Delete</Button></Container>
        </CardBody>
      </Card>
        </div>
    )
}

export default Course
