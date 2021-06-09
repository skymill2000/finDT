import logo from './logo.svg';
import './App.css';

const Welcome = () => {
  return (<h1>안녕하세요 ~ 님</h1>);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          안녕하세요
        </h1>
        <Welcome></Welcome>
        <Welcome></Welcome>
        <Welcome></Welcome>
        <p>
          2일차 기능 테스트
        </p>
      </header>
    </div>
  );
}

export default App;
