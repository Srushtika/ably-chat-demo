import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUserNinja } from "@fortawesome/free-solid-svg-icons";

function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <FontAwesomeIcon className="userIcon" icon={faUserNinja} />
        <h2>Ninja</h2>
        <p>This is a sample user description.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <FontAwesomeIcon className="userIcon" icon={faChevronDown} />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <FontAwesomeIcon className="userIcon" icon={faChevronDown} />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <FontAwesomeIcon className="userIcon" icon={faChevronDown} />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <FontAwesomeIcon className="userIcon" icon={faChevronDown} />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  );
}

export default Detail;
