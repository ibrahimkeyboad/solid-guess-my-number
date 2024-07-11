import {
  guess,
  highScore,
  message,
  score,
  secretNumber,
  setGuess,
  setHighScore,
  setMessage,
  setNumber,
  setScore,
} from '../store/guessNumber';

function Main() {
  function handleGuess(event: Event) {
    const target = event.target as HTMLInputElement;
    setGuess(Number(target.value));
  }

  function checkGuess() {
    if (!guess) {
      setMessage('⛔️ No number!');
    } else if (guess() === secretNumber()) {
      setMessage('🎉 Correct Number!');

      setNumber(guess());

      if (score() > highScore()) {
        setHighScore(score());
      }
    } else if (guess() !== secretNumber()) {
      if (score() > 1) {
        setMessage(guess() > secretNumber() ? '📈 Too high!' : '📉 Too low!');
        setScore(score() - 1);
      } else {
        setMessage('💥 You lost the game!');
        setScore(0);
      }
    }
  }

  return (
    <main>
      <section class='left'>
        <input
          onInput={handleGuess}
          type='number'
          value={guess()}
          class='guess'
        />
        <button onClick={checkGuess} class='btn check'>
          Check!
        </button>
      </section>
      <section class='right'>
        <p class='message'>{message()}</p>
        <p class='label-score'>
          💯 Score: <span class='score'>{score()}</span>
        </p>
        <p class='label-highscore'>
          🥇 Highscore: <span class='highscore'>{highScore()}</span>
        </p>
      </section>
    </main>
  );
}

export default Main;
