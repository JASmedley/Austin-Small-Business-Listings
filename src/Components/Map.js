import React from "react"


export default function GoogleMaps(props) {

 
  return (
    <div>
     <iframe
     width={props.width}
     height={props.height}
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&q=${props.listings.name}`}>
</iframe>
    </div>
  )
}