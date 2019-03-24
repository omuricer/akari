import * as React from 'react';
import { UpdateMessageParam } from './App';

interface ChatInterfaceProps {
  message: string;
  userName: string;
  sendMessage: (message: string) => void;
  updateMessage: (event: UpdateMessageParam) => void;
}

export default class ChatInterface extends React.Component<ChatInterfaceProps> {
  keyPress = (e: React.KeyboardEvent<any>) => {
    if (e.key === 'Enter') {
      this.send();
    }
  }

  send = () => {
    this.props.sendMessage(this.props.message);
  }


  render() {
    return (
      <div className="chat-interface">
        <h3>User: {this.props.userName} </h3>
        <input
          value={this.props.message}
          onChange={this.props.updateMessage}
          onKeyPress={this.keyPress}
          className="chat-input"
          placeholder="Type a message..."
        />
        <button onClick={this.send}>Send</button>
      </div>
    );  
  }
}
// const ChatInterface: React.SFC<ChatInterfaceProps> = ({
//   userName,
//   message,
//   updateMessage,
//   sendMessage,
// }) => {
//   function keyPress(e: React.KeyboardEvent<any>) {
//     if (e.key === 'Enter') {
//       send();
//     }
//   }

//   function send() {
//     sendMessage(message);
//   }

//   return (
//     <div className="chat-interface">
//       <h3>User: {userName} </h3>
//       <input
//         value={message}
//         onChange={updateMessage}
//         onKeyPress={keyPress}
//         className="chat-input"
//         placeholder="Type a message..."
//       />
//       <button onClick={send}>Send</button>
//     </div>
//   );
// };

// export default ChatInterface;
