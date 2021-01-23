import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps'
import { View } from 'react-native';
import { Text, Button, Input, Icon, Divider, List, ListItem} from '@ui-kitten/components';

class MapAreaWithStandingPoints extends Component {

    constructor(props){
        super(props);

        this.state = {
            location: props.location,
            markers: props.markers,
        }
    }

    render() {
        const ShowPolygon = () => {
            if(this.props.markers === null) {
                return (null);
            }
            else {//if(this.props.markers.length < 3) {
                return (this.props.markers.map((coord, index) => (
                    <MapView.Marker
                        key={index}
                        coordinate = {{
                            latitude: coord.latitude,
                            longitude: coord.longitude
                        }}
                    />
                    )))
                }
            }

        return(
            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{height:'100%'}}
                    initialCamera ={{
                        center:{
                            latitude: this.state.location.coords.latitude,
                            longitude: this.state.location.coords.longitude
                        },
                        pitch: 10,
                        heading: this.state.location.coords.heading,
                        altitude: this.state.location.coords.altitude,
                        zoom: 17
                    }}
                    onPress={event => this.props.addMarker(event.nativeEvent.coordinate)}
                >
                    <MapView.Polygon
                     coordinates={this.props.area}
                     strokeWidth={3}
                     strokeColor={'rgba(255,0,0,0.5)'}
                     fillColor={'rgba(0,0,0,0.5)'}
                    />

                    <ShowPolygon/>

                </MapView>
            </View>
        );
    }
}

export default MapAreaWithStandingPoints;
