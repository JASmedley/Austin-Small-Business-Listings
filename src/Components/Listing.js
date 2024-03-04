import React from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom'; 

const Listing = ({ listings }) => {
    const { id } = useParams(); 
    const listing = listings.find(listing => listing.id == id);

    if (!listing) {
        return <div>Listing not found</div>;
    }

    return (
        <Container maxWidth="sm" className="listing-container">
            <h2>{listing.name}</h2>
            <b>{listing.address}</b>
            <br></br>
            <br></br>
            <b>{listing.hours}</b>
            <p>{listing.description}</p>
        </Container>
    );
}

export default Listing;
