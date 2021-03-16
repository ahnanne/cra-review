import { Component, createContext } from 'react';
import Captain from '../Captain/Captain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip } from '@fortawesome/free-solid-svg-icons';
// import {} from '@fortawesome/free-solid-svg-icons';
import styles, { boat } from './Boat.module.scss';

export default class Boat extends Component {
  render() {
    const { weather } = this.props;

    return (
      <div className="boat">
        <FontAwesomeIcon
          className={boat}
          icon={faShip}
          size="6x"
        />
        <div className={styles[`${weather}DayCaptain`]}>
          <Captain weather={weather} />
        </div>
      </div>
    );
  }
}