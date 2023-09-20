import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { questionBank } from '../components/Quiz/QuestionBank';
import Score from '../components/Quiz/Score';
import ShortAnswerQuiz from '../components/Quiz/ShortAnswerQuiz';
import MultipleChoicesQuiz from '../components/Quiz/MultipleChoicesQuiz';
import Timer from '../components/Quiz/Timer';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [quizStart, setQuizStart] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const startQuiz = () => {
    setQuizStart(true);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const checkAnswer = () => {
    console.log(selectedOption);
    if (selectedOption === questionBank[currentQuestion].answer_content) {
      setScore((score) => score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questionBank.length) {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
      setSelectedOption('');
    } else {
      setQuizEnd(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const handleTimeExpired = () => {
    setTimeExpired(true);
    setQuizEnd(true);
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="font-bold text-2xl mb-4 text-center">GDSC-IU Quiz</h1>
      {!quizStart ? (
        <div className="flex place-content-center">
          <button
            className="bg-slate-800 text-white text-2xl px-4 py-1 rounded-lg w-fit hover:bg-slate-200 hover:text-black"
            onClick={startQuiz}>
            Start
          </button>
        </div>
      ) : !quizEnd ? (
        <div className="flex-col">
          <div className="container mx-auto">
            <h1 className="font-semibold mb-2 text-lg mb-4">
              Question {currentQuestion + 1}:{' '}
              {questionBank[currentQuestion].content}
            </h1>
            {questionBank[currentQuestion].type === 'short-answer' ? (
              <ShortAnswerQuiz
                question={questionBank[currentQuestion]}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
                onSubmit={handleFormSubmit}
              />
            ) : questionBank[currentQuestion].type === 'multiple-choices' ? (
              <MultipleChoicesQuiz
                question={questionBank[currentQuestion]}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
                onSubmit={handleFormSubmit}
              />
            ) : (
              <div>???</div>
            )}
          </div>
          <Timer initialTime={120} onTimeExpired={handleTimeExpired} />
        </div>
      ) : (
        <Score score={score} />
      )}
    </div>
  );
};

export default Quiz;
