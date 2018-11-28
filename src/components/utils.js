



const newNumber = () => Math.ceil(Math.random().toFixed(2)*100);

const compareNumbers = (gameNumber, currentGuess) => {
  console.log('compare numbers ran')
  let feedback = {
    message: '',
    color: ''
  };
  let difference = gameNumber-currentGuess;
  if (difference === 0) {
    feedback.message = "Winner!";
    feedback.color = 'red';
  }
  else if (difference >= -5 && difference <= 5) {
    feedback.message="You're on FIRE!";
    feedback.color = 'red';
  }
  else if (difference >= -10 && difference <= 10) {
    feedback.message="Hot!";
    feedback.color='orange';
  }
  else if (difference >= -15 && difference <= 15) {
    feedback.message="Warm!";
    feedback.color='yellow';
  }
  else if (difference >= -25 && difference <= 25) {
    feedback.message="Cool...";
    feedback.color='light blue';
  }
  else {
    feedback.message="Brrr.... Where's my coat?";
    feedback.color='blue';
  }
  return feedback;
}

export {
  newNumber, 
  compareNumbers
}
