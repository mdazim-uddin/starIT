import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
// import {findDOMNode} from 'react-dom'
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home/>
    </div>
  );
}

export default App;
