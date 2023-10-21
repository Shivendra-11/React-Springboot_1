import logo from './logo.svg';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';

function App() {

  return (
    <div>
      <Header/>

      <Container>
        <Row>
          <Col md={4}>
            <h2>This is menu side</h2>
          </Col>
          <Col md={8}>
            <h2>This is content side</h2>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
