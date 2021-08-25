import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '600px',
    height: '500px'
};

const center = {
    lat: 32.149960,
    lng: 34.883881
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCq69s-N1C8sggOeWFqhQWXNlxCtLjHNzs"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            // zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {<Marker position={{
                lat: 32.149960,
                lng: 34.883881
            }} />}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)