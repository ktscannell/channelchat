import React from 'react';

const MessageDetail = ({ message, author }) => (
  <li className="message-container">
    <img src={window.accountURL} />
    <div className="message-text-container">
      <h4>{author.username}</h4>
      <p>{message.body}</p>
    </div>
  </li>
);

export default MessageDetail;