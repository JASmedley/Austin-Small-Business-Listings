import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom'; 
import GoogleMaps from './Map';

const Listing = ({ listings , users}) => {
    const { id } = useParams(); 
    const listing = listings.find(listing => listing.id == id);
    useEffect(()=> {
        console.log(users)
    }, 
    []
    )

    if (!listing) {
        return <div>Listing not found</div>;
    }

 return (
        <Container maxWidth="sm" className="listing-container">
        <h4>Welcome, {users}</h4>
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
