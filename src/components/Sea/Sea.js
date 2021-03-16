import { Component, createContext } from 'react';
import Boat from '../Boat/Boat';
import { sea, button, span } from './Sea.module.scss';

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
      <>
        <div className={sea}>
          <Boat weather={weather} />
        </div>
        <button className={button} type="button" onClick={this.changeWeather}>날씨 바꾸기!</button>
        <span className={span}>현재 날씨: {weather}</span>
      </>
    );
  }
}