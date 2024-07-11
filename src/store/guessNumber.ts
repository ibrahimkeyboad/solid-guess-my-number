import { createSignal } from 'solid-js';

export const [secretNumber, setSecretNumber] = createSignal(
  Math.trunc(Math.random() * 20) + 1
);

export const [guess, setGuess] = createSignal(0);
export const [score, setScore] = createSignal(20);
export const [highScore, setHighScore] = createSignal(0);
export const [number, setNumber] = createSignal(0);
export const [message, setMessage] = createSignal('Start guessing...');
