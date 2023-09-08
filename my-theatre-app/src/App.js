import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Screens/HomePage';
import DetailPage from './Screens/DetailPage';
import SeatAllocationPage from './Screens/SeatAllocationPage';
import CheckoutPage from './Screens/CheckoutPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailPage/>} />
      <Route path="/seatAllocation" element={<SeatAllocationPage/>} />
      <Route path="/checkout" element={<CheckoutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
