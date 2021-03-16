import { WeatherContext } from '../Sea/Sea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja, faSwimmer } from '@fortawesome/free-solid-svg-icons';

export default function Captain() {
  return (
    <WeatherContext.Consumer>
      {/* Context.Consumer의 자식은 함수여야 함. */}
      {context => context === "sunny" ? 
        <FontAwesomeIcon icon={faUserNinja} size="3x" /> :
        <FontAwesomeIcon icon={faSwimmer} size="3x" />}
    </WeatherContext.Consumer>
  )
}
