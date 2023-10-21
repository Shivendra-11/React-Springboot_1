import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';

function App() {

  const btnHandle = () => {
    toast.success("Success")
  }

  return (
    <div className="App">
      <ToastContainer/>
      <h1>Simple Application</h1>
      <Button color='primary' size='lg' outline onClick={btnHandle}>React button</Button>
      <Course course={{title: "Android developement Course", description: "This course contains tutorials about all the basic implementations of android app."}}/>
    </div>
  );
}

export default App;
