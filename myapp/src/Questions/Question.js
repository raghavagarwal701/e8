import React from 'react';


const Question = ({ question, onOptionChange }) => {
  const isLastQuestionOfEssential = question.maturityLevel !== 3; // Assuming maximum maturity level is 3
    const handleNextQuestion=()=>{
        
        var selectedOption = document.querySelector('input[name="options"]:checked');
        if(selectedOption){
            onOptionChange(selectedOption.value);
            selectedOption.checked=false;
            console.log(selectedOption.value);
        }
        else {
            console.log("select a option");
        }
        
    }
return (
    <div className="question-format" >
    <h1 className="question">{question.question}</h1>
    <form>
    {question.options.map((option, index) => (
        <>
            <input
                type="radio"
                id={`option${index}`}
                name="options"
                value={option}
            />
            <label htmlFor={`option${index}`}>{option}</label>
            <br />
        </>
    ))}
    </form>
    <button onClick={handleNextQuestion}>
        Next
    </button>
    {/* {isLastQuestionOfEssential && (
        <button onClick={onNextEssential}>Next Essential</button>
    )} */}
    </div>
);
};

export default Question;
