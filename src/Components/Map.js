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
  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDFm295kBYGydWdNsGB29GUL18AUnxEgpY&q=${props.listings.name}`}>
</iframe>
    </div>
  )
}