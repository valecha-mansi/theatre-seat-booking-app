import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import DetailPage from './Components/DetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailPage/>} />
      </Routes>
    </div>
  );
}

export default App;
