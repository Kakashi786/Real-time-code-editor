import React, { useState } from "react";
import Client from "./Components/Client";
import Editor from "./Components/Editor";

const EditorPage = () => {
  const [clients, setNewClients] = useState([
    { socketId: 1, username: "rakesh k" },
    { socketId: 2, username: "Homaid Afroz" },
    {socketId:3, username: "kya haal"},
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asidInner">
          <div className="logo">
            <img
              className="logoImage"
              alt="logo"
              src={require("./web-logo.png")}
            />
          </div>
          <h3>Connected</h3>
          <div className="clientList">
            {clients.map((client) => {
              return (
                <Client key={client.socketId} username={client.username} />
              );
            })}
          </div>
        </div>
        <button className="btn copyBtn">Copy Room ID</button>
        <button className="btn LeaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
