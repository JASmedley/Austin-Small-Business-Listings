import React from 'react'
import { Routes, Route, Navigate} from 'react-router'
import { useSelector } from 'react-redux'
import cookie from 'cookie'
import Login from './Components/Login'
import Listings from './containers/AdminListings'
import Listing from './containers/Listing'

function checkAuth() {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  }

  const ProtectedRoute = (props) => {
    console.log(props)
    const {component: Component, ...rest} = props;
  
    return (
      checkAuth() === true ? <Component {...rest}/> : <Navigate to="/login"/>
    )
   }
   const Router = () => {
    const listings = useSelector(state => state.listings);
  
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Listings listings={listings} />} />
        <Route path="/:id" element={<Listing listings={listings} />} />
      </Routes>
    );
  };
  

export default Router;