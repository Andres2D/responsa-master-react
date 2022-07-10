import summaryMessages from '../constants/summary-messages'; 

export const scrambleArray = array => {
  let currentIndex = array.length, randomIndex;
  while(currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export const decodeHtml = text => {
  var txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
};

export const getRandomPosition = (array) => {
  return array[Math.floor(Math.random() * (array.length - 1))];
};

export const calculateScoreMessage = (questions) => {
  if(!questions || questions.length < 2){
    return null;
  }

  const totalQuestions = questions.length;
  let correctAnswers = 0;

  questions.forEach(question => {
    correctAnswers = question.answerSelected === question.correct_answer
    ? (correctAnswers + 1) : correctAnswers;
  });

  const percentage = (correctAnswers / totalQuestions) * 100;
  const message = summaryMessages.filter(q =>  percentage <= q.limit)[0].message || '';

  return {
    totalQuestions,
    correctAnswers,
    message
  }
}
