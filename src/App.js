import logo from './logo.svg';
import './App.css';
import CounterSection from './components/CountSecction';

function App() {
  return (
    <>
      <CounterSection initValue={0} initStep={1}/>
    </>
  );
}

export default App;
