'use client'

import React, { useState } from 'react';

const MultipleChoiceQuiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const question = questions[currentQuestion];

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h2>
      <p className="text-lg mb-4">{question.question}</p>
      <div className="space-y-2">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={`w-full p-3 text-left rounded-md transition-colors ${
              selectedAnswer === answer
                ? answer === question.correctAnswer
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            disabled={showResult}
          >
            {answer}
          </button>
        ))}
      </div>
      {showResult && (
        <div className="mt-4">
          <p className="font-semibold">
            {selectedAnswer === question.correctAnswer
              ? 'Correct!'
              : 'Incorrect. The correct answer is: ' + question.correctAnswer}
          </p>
        </div>
      )}
      {showResult && currentQuestion < questions.length - 1 && (
        <button
          onClick={handleNextQuestion}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default MultipleChoiceQuiz;