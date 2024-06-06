import "./UserInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faVideo,
  faEdit,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

function UserInfo() {
  return (
    <div className="userInfo">
      <div className="user">
        <FontAwesomeIcon className="userIcon" icon={faUserAstronaut} />
        <h2>Ablyan Chatter</h2>
      </div>
      <div className="icons">
        <FontAwesomeIcon className="icon" icon={faEllipsis} />
        <FontAwesomeIcon className="icon" icon={faVideo} />
        <FontAwesomeIcon className="icon" icon={faEdit} />
      </div>
    </div>
  );
}

export default UserInfo;
