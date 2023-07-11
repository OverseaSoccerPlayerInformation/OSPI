import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {

  const [text, setText] = useState([]);

  axios.get("http://127.0.0.1:8000/api/test/")
    .then((response) => {
      setText([...response.data]);
      console.log(text);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div>
      안녕
    </div>
  );
}

export default App;
