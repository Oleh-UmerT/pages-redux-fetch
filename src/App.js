import './styles/App.css';
import HomePage from './components/HomePage';
import ServiceDetails from './components/ServiceDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ServiceDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
