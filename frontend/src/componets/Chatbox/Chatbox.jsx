import React from "react";
import "./Chat2.css";
import GroupIcon from '@mui/icons-material/Group';
const Chatbox = ({ id, chats, handleChange, handleSubmit, message }) => {
  const uniqueUsers = chats.reduce((unique, chat) => {
    return unique.includes(chat.name) ? unique : [...unique, chat.name];
  }, []);

  return (
    <>
      <div className="chat_container">
        <div className="chat-container">
          <div className="left-container">
        
          

            {/* Users */}
            <ul className="User_Container"> 
              <li className="users_container">
                <GroupIcon sx={{ color: 'white' ,fontSize: 40 }}/>
                <p className="Users">Users</p>
              </li>

              {uniqueUsers.map((user, index) => (
                <li className="Userlist"key={index}>
                  <p className="User_list">{user}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="right-container">
            {/* Chat */}
            <div className="chat-history">
              {chats.map((chat, index) => (
                <div key={index} className={chat.action === 'incoming' ? 'left' : 'right'}>
                  <p>{chat.name}</p>
                  <p>:</p>
                  <p>{chat.message}</p>
                </div>
              ))}
            </div>
            <div className="text-input">
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Type your message..."
          />
          <button onClick={handleSubmit}>Send</button>
        </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Chatbox;
