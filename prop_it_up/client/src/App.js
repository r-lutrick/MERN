import logo from './logo.svg';
import './App.css';
import First from './components/PropItUp';

function App() {
  return (
    <div className="App">
      <First firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <First firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <First firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      <First firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;
