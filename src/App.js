import React from 'react';
import './App.css';
import WeatherItem from "./WeatherItem/WeatherItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.meteo = [
    { j: 'lundi', temps:'soleil'},
    { j: 'mardi', temps:'soleil'},
    { j: 'mercredi', temps:'pluie'},
    { j: 'jeudi', temps:'pluie'},
    { j: 'vendredi', temps:'pluie'},
    { j: 'samedi', temps:'pluie'},
    { j: 'dimanche', temps:'pluie'},
    ];

    const day = (new Date()).getDay();
    this.today = this.meteo[day - 1];
  }
 
  render() {
    return (
      <div>
        <button type="button" onClick={() => this.setState ({ selectedDay : 'toto'});}}>
   {this.meteo.map((item) => <WeatherItem day={item}/>)}
    </div>
    );
  }
}
export default App;