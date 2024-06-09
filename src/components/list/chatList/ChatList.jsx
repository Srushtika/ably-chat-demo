import "./ChatList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faMinus,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ChatList() {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <input type="text" placeholder="Search" />
        </div>

        <FontAwesomeIcon
          className="add"
          icon={addMode ? faPlus : faMinus}
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
        <div className="texts">
          <span>Ablyan</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
