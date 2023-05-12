import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Missions from './components/Missions';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          {/* <Route path="/" element={<Missions />} /> */}
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
