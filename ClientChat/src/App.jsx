// import { useEffect, useState } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:3001");

// function App() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const sendMessage = () => {
//     if (message.trim() === "") return;

//     socket.emit("send_message", message);
//     setMessage("");
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessages((prev) => [...prev, data]);
//     });

//     return () => socket.off("receive_message");
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Socket.IO Chat</h2>

//       <div>
//         {messages.map((msg, i) => (
//           <div key={i}>{msg}</div>
//         ))}
//       </div>

//       <input
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type a message..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Captcha from "./Captcha";

const App = () => {
  return (
    <>
      <Captcha />
    </>
  );
};

export default App;
