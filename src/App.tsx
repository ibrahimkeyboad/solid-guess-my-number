import Header from './components/header';
import Main from './components/main';
import { number, secretNumber } from './store/guessNumber';

function App() {
  return (
    <div
      style={{
        'background-color': number() === secretNumber() ? '#60b347' : '#222',
      }}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
