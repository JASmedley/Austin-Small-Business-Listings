import React from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom'; 
import GoogleMaps from './Map';

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
            <GoogleMaps width="500vh" height="400 vh" listings={listing}/>
        </Container>
        
    );
}

export default Listing;
