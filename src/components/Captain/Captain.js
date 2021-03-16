import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja, faSwimmer } from '@fortawesome/free-solid-svg-icons';

export default function Captain({ weather }) {
  if (weather === "sunny") {
    return (
      <FontAwesomeIcon
        icon={faUserNinja}
        size="3x"
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        icon={faSwimmer}
        size="3x"
      />
    );
  }
}
