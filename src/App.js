// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import BearCounter from './Components/BearCounter';
import Controls from './Components/Controls';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>

        <Route exact path='/one' element={<BearCounter/>} />
        <Route exact path='/two' element={<Controls/>} />

      </Routes>
     </Router>
     
     </div>
  );
}

export default App;
