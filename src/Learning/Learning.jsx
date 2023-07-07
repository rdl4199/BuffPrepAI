import React from 'react';
import './Learning.css'
import NavBar from '../NavBar';

class Results extends React.Component {
  render() {
    const { score, totalQuestions, wrongAnswers } = this.props;

    return (
        <div>
            <h1 className='QuestionTitle'>Your Score: {score} / {totalQuestions}</h1>
            <h2>You fed the following questions incorrectly:</h2>
            <ul>
                {wrongAnswers.map((item, index) => (
                    <li key={index}>
                        <p><strong>Question:</strong> {item.question}</p>
                        <p><strong>Your answer:</strong> {item.selectedAnswer}</p>
                        <p><strong>Correct answer:</strong> {item.correctAnswer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
}

class Learning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswers: []
        };
    }

    handleChange = (index) => {
        const { question } = this.props;
        let selectedAnswers;

        if (question.type === 'radio') {
            selectedAnswers = [index];
        } else {
            selectedAnswers = [...this.state.selectedAnswers];
            const answerIndex = selectedAnswers.indexOf(index);

            if (answerIndex === -1) {
                selectedAnswers.push(index);
            } else {
                selectedAnswers.splice(answerIndex, 1);
            }
        }

        this.setState({ selectedAnswers });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.selectedAnswers.length > 0) {
            this.props.handleAnswer(this.state.selectedAnswers);
            this.setState({ selectedAnswers: [] });  // Reset the selected answers
        }
    }

    render() {
        const { question } = this.props;
        const { selectedAnswers } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h1 className='QuestionTitle'>{question.question}</h1>

                {question.choices.map((choice, index) =>
                    <label key={index} 
                        className={`choice-card ${selectedAnswers.includes(index) ? "selected" : ""}`} 
                        htmlFor={`choice-${index}`}>
                        <input
                            type={question.type}
                            id={`choice-${index}`}
                            className="hidden-input"
                            checked={selectedAnswers.includes(index)}
                            onChange={() => this.handleChange(index)}
                        />
                        <span className={question.type}></span>
                        {choice}
                    </label>
                )}

                <button className='next-button ' type="submit">Next</button>
            </form>
        );
    }
}


class LearningApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentIndex: 0,
        score: 0,
        finished: false,
        questions: [
          {
            question: 'What is 2 + 2?',
            choices: ['1', '2', '4', '3'],
            answer: 2,
            type: 'radio'
          },
          {
            question: 'What is the capital of France?',
            choices: ['London', 'Berlin', 'Paris', 'Madrid'],
            answer: 2,
            type: 'radio'
          },
          {
            question: 'Select the even numbers',
            choices: ['1', '2', '3', '4'],
            answer: [1, 3],
            type: 'checkbox'
          },
          // Add more questions as needed
        ],
        wrongAnswers: []
      };
    }
  
    handleAnswer = (answer) => {
      const currentQuestion = this.state.questions[this.state.currentIndex];
      let isCorrect;
  
      if (currentQuestion.type === 'radio') {
        isCorrect = answer[0] === currentQuestion.answer;
      } else {
        isCorrect = JSON.stringify(answer.sort()) === JSON.stringify(currentQuestion.answer.sort());
      }
  
      if (isCorrect) {
        this.setState(prevState => ({
          score: prevState.score + 1
        }));
      }
      if (!isCorrect) {
        // Add the question and selected answer to the wrongAnswers array
        this.setState(prevState => ({
            wrongAnswers: [
                ...prevState.wrongAnswers,
                {
                    question: currentQuestion.question,
                    correctAnswer: currentQuestion.choices[currentQuestion.answer],
                    selectedAnswer: currentQuestion.choices[answer[0]]
                }
            ]
        }));}
      if (this.state.currentIndex < this.state.questions.length - 1) {
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1
        }));
      } else {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
          }));
        this.setState({ finished: true });
      }
    }
  
    render() {
      const progress = ((this.state.currentIndex) / this.state.questions.length) * 100;
      return (
          <div className='LearningPage'>
              <NavBar></NavBar>
              <div className="progress-bar">
                  <div className="progress" style={{ width: `${progress}%` }}></div>
              </div>
              <div className='app-container'>
                  <div className='card'>
                      {!this.state.finished ? 
                          <Learning 
                          question={this.state.questions[this.state.currentIndex]} 
                          handleAnswer={this.handleAnswer}
                          /> :
                          <Results score={this.state.score} totalQuestions={this.state.questions.length} wrongAnswers={this.state.wrongAnswers}/>
                      }
                  </div>
              </div>
          </div>
      );
  }
}
  

export default LearningApp;
