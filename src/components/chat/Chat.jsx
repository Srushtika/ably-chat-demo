import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUserAstronaut,
  faVideo,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

function Chat() {
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <FontAwesomeIcon className="userIcon" icon={faUserAstronaut} />
          <div className="texts">
            <span>Ablyan</span>
            <p>This is a kickass user</p>
          </div>
        </div>
        <div className="icons">
          <FontAwesomeIcon className="userIcon" icon={faPhone} />
          <FontAwesomeIcon className="userIcon" icon={faVideo} />
          <FontAwesomeIcon className="userIcon" icon={faCircleInfo} />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom"></div>
    </div>
  );
}

export default Chat;
