import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUserAstronaut,
  faVideo,
  faCircleInfo,
  faFaceSmile,
  faCamera,
  faImage,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

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
      <div className="bottom">
        <div className="icons">
          <FontAwesomeIcon className="userIcon" icon={faImage} />
          <FontAwesomeIcon className="userIcon" icon={faCamera} />
          <FontAwesomeIcon className="userIcon" icon={faMicrophone} />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="emoji">
          <FontAwesomeIcon
            className="userIcon"
            icon={faFaceSmile}
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
