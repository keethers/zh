const spin = () => {
  const result = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
  setReels(result);

  if (result[0] === result[1] && result[1] === result[2]) {
    setMessage("🎉 JACKPOT! You win 25 EX$!");
  } else if (result[0] === result[1] || result[1] === result[2]) {
    setMessage("🔥 Small win! You win 10 EX$.");
  } else {
    setMessage("😢 Try again!");
  }
}
;
