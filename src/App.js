import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import AppContainer from './containers/AppContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContainer />
    </div>
    <div id="map"></div>
    <script>
function initMap() {
  var uluru = {lat: -25.344, lng: 131.036};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBEXgPWV0cWc_MHvNQP31vl9SPml19G1o0&callback=initMap">
    </script>
  );
}

export default App;
