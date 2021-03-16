import { Component } from 'react';
import { WeatherContext } from '../Sea/Sea';
import Captain from '../Captain/Captain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip } from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/free-solid-svg-icons';
import styles, { boat } from './Boat.module.scss';

export default class Boat extends Component {
  render() {
    return (
      <WeatherContext.Consumer>
        {/* Context.Consumer의 자식은 함수여야 함. */}
        {context => (
          <div className="boat">
            <FontAwesomeIcon
              className={boat}
              icon={faShip}
              size="6x"
            />
            <div className={styles[`${context}DayCaptain`]}>
              <Captain />
            </div>
          </div>
        )}
      </WeatherContext.Consumer>
    );
  }
}