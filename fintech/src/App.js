import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

const Welcome = ({username, age}) => {
  return (<h1>안녕하세요 {username}(이름) {age}(세) 님</h1>);
}


function App() {
  const [username, setUsername] = useState("입력된 이름이 없습니다.");
  const changeName = (event) =>{
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Welcome username={username} age="33"></Welcome>
        <input onChange={changeName}></input>
      </header>
    </div>
  );
}

export default App;
