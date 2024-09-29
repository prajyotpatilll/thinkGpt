import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

function Sidebar() {
  const [extended, setextended] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} alt="" />
      </div>
      <div className="new-chat">
        <img src={assets.plus_icon} alt="" />
        <p>New chat</p>
      </div>

      <div className="recent">
        <p className="recent-title">recent</p>

        <div className="recent-entry">
          <img src={assets.message_icon} alt="" />
          {extended ? <p>What is react....</p> : null}
        </div>
      </div>
      <div className="bottom">
        <div className="bootom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="bootom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          <p>history</p>
        </div>
        <div className="bootom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p>setting</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
