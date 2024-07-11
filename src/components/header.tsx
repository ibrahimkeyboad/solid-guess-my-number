import {
  number,
  secretNumber,
  setGuess,
  setMessage,
  setNumber,
  setScore,
  setSecretNumber,
} from '../store/guessNumber';

function Header() {
  function handleTryAgain() {
    setScore(20);
    setSecretNumber(Math.trunc(Math.random() * 20) + 1);
    setMessage('Start guessing...');
    setGuess(0);
    setNumber(0);
  }

  return (
    <header>
      <h1>Guess My Number!</h1>
      <p class='between'>(Between 1 and 20)</p>
      <button onclick={handleTryAgain} class='btn again'>
        Again!
      </button>
      <h2
        style={{ width: number() === secretNumber() ? '30rem' : '15rem' }}
        class='number'>
        {number() === secretNumber() ? number() : '?'}
      </h2>
    </header>
  );
}

export default Header;
