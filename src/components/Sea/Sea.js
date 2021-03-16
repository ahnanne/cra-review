import { Component, createContext } from 'react';
import Boat from '../Boat/Boat';
import { sea, button, span } from './Sea.module.scss';

// context를 만들어보자!
export const WeatherContext = createContext(null);

export default class Sea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: "sunny",
      // or "rainstorm"
    };
  }

  changeWeather = () => {
    this.setState((prevState) => ({
      ...prevState,
      weather: this.state.weather === "sunny" ? "rainstorm" : "sunny",
    }));
  };

  render() {
    const { weather } = this.state;

    return (
      <WeatherContext.Provider value={weather}>
        <div className={sea}>
          <Boat />
        </div>
        <button className={button} type="button" onClick={this.changeWeather}>날씨 바꾸기!</button>
        <span className={span}>현재 날씨: {weather}</span>
      </WeatherContext.Provider>
    );
  }
}