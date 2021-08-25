import React from 'react'

export default function Home() {
    return (
        <div className="home-container">
            <h1> Our Story</h1>
            <p className="bold"> IL CandyShop’s is recognized as a leader in the confectionery market of la la land, offering a large selection of products in more than 30 countries around the world. During 30 years of CandyShop’s’s existence, it has become known as one of the most innovative and creative companies. CandyShop’s is the pioneer in jellies and has launched brands in technically challenging categories such as pure chocolates, lollipops and marshmallows.</p>
            <iframe width="853" height="480" src="https://www.youtube.com/embed/SRcnnId15BA" frameBorder="0" allowFullScreen></iframe>

        </div>
    )
}


// import React from 'react'
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// const containerStyle = {
//     width: '600px',
//     height: '500px'
// };

// const center = {
//     //   lat: 34.883881,
//     //   lng: 32.149960
//     lat: 32.149960,
//     lng: 34.883881
// };

// function MyComponent() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "AIzaSyCq69s-N1C8sggOeWFqhQWXNlxCtLjHNzs"
//     })

//     const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {
//         const bounds = new window.google.maps.LatLngBounds();
//         map.fitBounds(bounds);
//         setMap(map)
//     }, [])

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null)
//     }, [])

//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             // zoom={10}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//         >
//             {<Marker position={{
//                 lat: 32.149960,
//                 lng: 34.883881
//             }} />}
//             <></>
//         </GoogleMap>
//     ) : <></>
// }

// export default React.memo(MyComponent)