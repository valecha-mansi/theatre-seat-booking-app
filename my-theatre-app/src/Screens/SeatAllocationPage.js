import React from 'react';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShowCase } from "../Components/ShowCase";
import { Cinema } from "../Components/Cinema";
import { Button } from 'antd';

const containerStyle = {
    display: 'block', 
    padding: 10
  }
  
  const headerStyle = {
    color: '#FDEDEC',
    fontStyle: 'oblique',
    fontSize: '150%',
  } 

const infoStyle = {
    color: '#7bc47f',
}

const SeatAllocationPage = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const movieData = location.state;
    const [selectedMovie, setSelectedMovie] = useState(movieData.details)
    const [selectedSeats, setSelectedSeats] = useState([])

    const handleCheckout = () => {
        const checkoutDetails = {
            amount: `${selectedSeats.length * selectedMovie.price}`,
            selectedSeats: selectedSeats.length,
            moviesData: movieData.details,
            timingSelected: movieData.timeSelected,
        }
        navigate('/checkout', {state: checkoutDetails})
    }

    return (
        <div style={containerStyle}>
            <h4 style={headerStyle}>Book My Show</h4>
            <ShowCase />
            <Cinema
                movie={selectedMovie}
                selectedSeats={selectedSeats}
                onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
            />

            <p style={{color: 'white'}}>
                You have selected <span style={infoStyle}>{selectedSeats.length}</span>{' '}
                seats for the price of{' '}
                <span style={infoStyle}>
                ${selectedSeats.length * selectedMovie.price}
                </span>
            </p>

            <Button type="primary" style={{margin: 10, width: 150,}} onClick={handleCheckout}>Checkout</Button>
        </div>
    )
}
 
export default SeatAllocationPage;
