import React, { useEffect, useState } from 'react';
import Footer from '../crumbs/footer';
import NavbarSidebar from '../crumbs/NavbarSidebar';
import './question.css';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const Question = () => {
  const { id } = useParams(); // Retrieve the ID from the URL

  useEffect(() => {
    document.title = "Study"
  }, []);

  const [topic, setTopic] = useState(null);
  const [topicErrors, setTopicErrors] = useState('');

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/topics/${id}`);
        setTopic(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching topic:', error);
        setTopicErrors(error.message);
      }
    };
    fetchTopic();
  }, [id]);

  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < topic.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartLecture = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setCurrentStep(1);
  };

  const restartQuestion = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setCurrentStep(3);
  };

  if (topicErrors) {
    return <div>Error: {topicErrors}</div>;
  }

  if (!topic) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <NavbarSidebar />
      {currentStep === 0 && (
        <div className="start-screen">
          <button className="btn" onClick={() => setCurrentStep(1)}>Start Learning</button>
        </div>
      )}
      {currentStep === 1 && (
        <div className="video-screen">
          <iframe
            width="100%"
            height="100%"
            src={topic.video_url}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="btn" onClick={() => setCurrentStep(2)}>Next</button>
        </div>
      )}
      {currentStep === 2 && (
        <div className="pdf-screen">
          <iframe
            src={topic.pdf_url}
            width="100%"
            height="100%"
            title="PDF Viewer"
          ></iframe>
          <button className="btn" onClick={() => setCurrentStep(3)}>Next</button>
        </div>
      )}
      {currentStep === 3 && (
        <div className="quiz-screen">
          <h1 className="quiz-title">{topic.title} Quiz</h1>
          <h2 className="quiz-score">Score: {score}</h2>
          {showResults ? (
            <div className="final-results">
              <h1 className="results-title">Final Results</h1>
              <h2 className="results-score">
                {score} out of {topic.questions.length} correct - (
                {(score / topic.questions.length) * 100}%)
              </h2>
              <button className="btn" onClick={restartLecture}>Restart from Lecture</button>
              <button className="btn" onClick={restartQuestion}>Restart from Questions</button>
              <br />
              <Link to="/home"><button className="btn">Dashboard</button></Link>
            </div>
          ) : (
            <div className="question-card">
              <h2 className="question-count">
                Question: {currentQuestionIndex + 1} out of {topic.questions.length}
              </h2>
              <h3 className="question-text">
                {topic.questions[currentQuestionIndex].question_text}
              </h3>
              <ul className="options-list">
                {['option1', 'option2', 'option3', 'option4'].map((optionKey) => {
                  const optionText = topic.questions[currentQuestionIndex][optionKey];
                  const isCorrect = optionText === topic.questions[currentQuestionIndex].correct_answer;
                  return (
                    <li
                      key={optionKey}
                      className="option-item"
                      onClick={() => optionClicked(isCorrect)}
                    >
                      {optionText}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Question;
