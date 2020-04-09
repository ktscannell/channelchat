import React from 'react';

const MessageDetail = ({ message, author }) => (
  <li className="message-container">
    <i className="fas fa-user" style={{backgroundColor: generateRandomColor()}}></i>
    <div className="message-text-container">
      <h4>{author.username}</h4>
      <p>{message.body}</p>
    </div>
  </li>
);

const generateRandomColor = () => (
  '#' + Math.floor(Math.random() * 16777215).toString(16)
)

export default MessageDetail;