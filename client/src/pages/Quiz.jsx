import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { questionBank } from '../components/Quiz/QuestionBank';
import Score from '../components/Quiz/Score';
import ShortAnswerQuiz from '../components/Quiz/ShortAnswerQuiz';
import MultipleChoicesQuiz from '../components/Quiz/MultipleChoicesQuiz';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

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

  return (
    <div className="p-4">
      <BackButton />
      <h1>GDSC-IU Quiz</h1>
      {!quizEnd ? (
        <div>
          <h1>
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
      ) : (
        <Score score={score} />
      )}
    </div>
  );
};

export default Quiz;
