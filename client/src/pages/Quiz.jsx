import React, { useState, useCallback } from 'react';
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

  const handleReply = useCallback(() => {
    setQuizStart(true);
    setQuizEnd(false);
    setTimeExpired(false);
    setCurrentQuestion(0);
    setScore(0);
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const checkAnswer = () => {
    if (
      selectedOption.toLowerCase() ===
      questionBank[currentQuestion].answer_content.toLowerCase()
    ) {
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
      <h1 className="font-bold text-3xl max-md:text-2xl mb-4 text-center mt-4">
        Google Developer Student Clubs - HCMIU Quiz
      </h1>
      {!quizStart ? (
        <div className="flex place-content-center">
          <button
            className="bg-slate-800 text-white text-xl px-4 py-1 rounded-lg hover:bg-slate-200 hover:text-black w-fit max-md:w-5/6"
            onClick={startQuiz}>
            Start the quiz
          </button>
        </div>
      ) : !quizEnd ? (
        <div className="md:mx-auto md:max-w-8xl md:grid md:grid-cols-3 md:gap-7 md:p-4">
          <Timer initialTime={120} onTimeExpired={handleTimeExpired} />
          <div className="container mx-auto p-4 border-2 border-black rounded-md">
            <h1 className="font-semibold text-lg mb-4">
              Question {currentQuestion + 1}:&nbsp;
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
        </div>
      ) : (
        <div className="flex flex-col">
          <Score score={score} />
          <button
            className="mt-4 bg-slate-800 text-white text-xl px-4 py-1 rounded-lg hover:bg-slate-200 hover:text-black mx-auto"
            onClick={handleReply}>
            Play again!
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
