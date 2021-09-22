import "./App.css";
import Home from "./components/Home";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import Menu from "./components/Menu";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
        <Router>

      <Header />
      <Container>
      <Row>
        <Col md={4}>
          <Menu/>
        </Col>
        <Col md={8}>
       <Route path='/' component={Home} exact  />
       <Route path='/add-course' component={AddCourse} exact  />
       <Route path='/view-courses' component={AllCourses} exact  />

        
         
        </Col>
      </Row>
      </Container>
      </Router>  
         
    </div>
  );
}

export default App;
