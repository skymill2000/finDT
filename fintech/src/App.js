import logo from './logo.svg';
import './App.css';

const Welcome = ({username, age}) => {
  return (<h1>안녕하세요 {username}(이름) {age}(세) 님</h1>);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome username="유관우"></Welcome>
        <Welcome username="홍길동"></Welcome>
        <Welcome username="고길동"></Welcome>
      </header>
    </div>
  );
}

export default App;
