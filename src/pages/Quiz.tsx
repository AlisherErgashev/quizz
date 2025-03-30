import { useState } from 'react';
import { Button } from '@mui/material';

export default function Quiz() {
    // Define questions and answers
    const questions = [
        {
            question: 'Which event occurs when the user clicks on an HTML element?',
            options: ['onchange', 'onclick', 'onmouseover', 'onmouseclick'],
            correctAnswerIndex: 1,
        },
        {
            question: 'What does CSS stand for?',
            options: [
                'Computer Style Sheets',
                'Creative Style Sheets',
                'Cascading Style Sheets',
                'Colorful Style Sheets',
            ],
            correctAnswerIndex: 2,
        },
        {
            question: 'Which programming language runs in the browser?',
            options: ['Python', 'JavaScript', 'C++', 'Java'],
            correctAnswerIndex: 1,
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerSelection = (selectedOptionIndex: number) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOptionIndex === currentQuestion.correctAnswerIndex) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Quiz Application</h1>
            {showResults ? (
                <div style={{width: '400px', margin: '0 auto'}}>
                    <h2>Quiz Results</h2>
                    <p>
                        You scored {score} out of {questions.length}.
                    </p>
                    <Button variant={'contained'} onClick={resetQuiz}>Restart Quiz</Button>
                </div>
            ) : (
                <div style={{width: '400px', margin: '0 auto'}}>
                    <h2>Question {currentQuestionIndex + 1}:</h2>
                    <p>{questions[currentQuestionIndex].question}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <Button variant={'contained'}
                                key={index}
                                onClick={() => handleAnswerSelection(index)}
                                style={{
                                    margin: '10px',
                                    padding: '10px 20px',
                                    width: '100%'
                                }}
                            >
                                {option}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
