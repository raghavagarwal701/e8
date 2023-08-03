import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import Question from './Questions/Question';
import jsPDF from 'jspdf';
const App = () => {
  const questionnaire = useMemo(() => ({
    essential1: [
      {
        question: "Access Control: Is there a centralized system for managing user access rights and permissions to critical systems and data?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 0,
      },
      {
        question: "Does your organization implement proactive controls and practices beyond basic documentation for managing and securing applications?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 1,
      },
      {
        question: "Has your organization implemented automated tools or mechanisms to actively monitor and enforce application control policies and configurations?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 2,
      },
      {
        question: "Has your organization established a comprehensive and ongoing program for testing and validating the effectiveness of application control measures?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 3,
      },
    ],
    essential2: [
      {
        question: "Are users in your organization educated on basic safe browsing habits and warned against downloading files from untrusted sources?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 0,
      },
      {
        question: "Do you have browser extensions or security settings in place to block known malicious websites and warn users about potentially harmful content?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 1,
      },
      {
        question: "Has your organization implemented web content filtering and sandboxing mechanisms to isolate potentially malicious or untrusted files and URLs?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 2,
      },
      {
        question: "Do you employ advanced techniques such as runtime application self-protection (RASP) or browser isolation to mitigate the risks of web-based attacks?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 3,
      },
    ],
    essential3: [
      {
        question: "3Are users in your organization educated on basic safe browsing habits and warned against downloading files from untrusted sources?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 0,
      },
      {
        question: "Do you have browser extensions or security settings in place to block known malicious websites and warn users about potentially harmful content?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 1,
      },
      {
        question: "Has your organization implemented web content filtering and sandboxing mechanisms to isolate potentially malicious or untrusted files and URLs?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 2,
      },
      {
        question: "Do you employ advanced techniques such as runtime application self-protection (RASP) or browser isolation to mitigate the risks of web-based attacks?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 3,
      },
    ],
    essential4: [
      {
        question: "4Are users in your organization educated on basic safe browsing habits and warned against downloading files from untrusted sources?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 0,
      },
      {
        question: "Do you have browser extensions or security settings in place to block known malicious websites and warn users about potentially harmful content?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 1,
      },
      {
        question: "Has your organization implemented web content filtering and sandboxing mechanisms to isolate potentially malicious or untrusted files and URLs?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 2,
      },
      {
        question: "Do you employ advanced techniques such as runtime application self-protection (RASP) or browser isolation to mitigate the risks of web-based attacks?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 3,
      },
    ],
    essential5: [
      {
        question: "5Are users in your organization educated on basic safe browsing habits and warned against downloading files from untrusted sources?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 0,
      },
      {
        question: "Do you have browser extensions or security settings in place to block known malicious websites and warn users about potentially harmful content?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 1,
      },
      {
        question: "Has your organization implemented web content filtering and sandboxing mechanisms to isolate potentially malicious or untrusted files and URLs?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 2,
      },
      {
        question: "Do you employ advanced techniques such as runtime application self-protection (RASP) or browser isolation to mitigate the risks of web-based attacks?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 3,
      },
    ],
    essential6: [
      {
        question: "6Are users in your organization educated on basic safe browsing habits and warned against downloading files from untrusted sources?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 0,
      },
      {
        question: "Do you have browser extensions or security settings in place to block known malicious websites and warn users about potentially harmful content?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 1,
      },
      {
        question: "Has your organization implemented web content filtering and sandboxing mechanisms to isolate potentially malicious or untrusted files and URLs?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 2,
      },
      {
        question: "Do you employ advanced techniques such as runtime application self-protection (RASP) or browser isolation to mitigate the risks of web-based attacks?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 3,
      },
    ],
    essential7: [
      {
        question: "7Are users in your organization educated on basic safe browsing habits and warned against downloading files from untrusted sources?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 0,
      },
      {
        question: "Do you have browser extensions or security settings in place to block known malicious websites and warn users about potentially harmful content?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 1,
      },
      {
        question: "Has your organization implemented web content filtering and sandboxing mechanisms to isolate potentially malicious or untrusted files and URLs?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 2,
      },
      {
        question: "Do you employ advanced techniques such as runtime application self-protection (RASP) or browser isolation to mitigate the risks of web-based attacks?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 3,
      },
    ],
    essential8: [
      {
        question: "8Are users in your organization educated on basic safe browsing habits and warned against downloading files from untrusted sources?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 0,
      },
      {
        question: "Do you have browser extensions or security settings in place to block known malicious websites and warn users about potentially harmful content?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 1,
      },
      {
        question: "Has your organization implemented web content filtering and sandboxing mechanisms to isolate potentially malicious or untrusted files and URLs?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 2,
      },
      {
        question: "Do you employ advanced techniques such as runtime application self-protection (RASP) or browser isolation to mitigate the risks of web-based attacks?",
        options: ["Yes", "No"],
        choosedOption: null,
        maturityLevel: 3,
      },
    ],
  }), []);

  const [userResponses, setUserResponses] = useState({});
  const [currentEssential, setcurrentEssential] = useState(1);
  const [currentQuestion,setCurrentQuestion]=useState(0);

  const handleOptionChange = (selectedOption) => {
    // Find the current essential questions based on the current maturity level
    const currentEssentialQuestions = questionnaire[`essential${currentEssential}`];
  
    // Update the user's answer for the current question
    currentEssentialQuestions.map((question, index) =>
      index === currentQuestion
        ? { ...question, choosedOption: selectedOption }
        : question
    );
    const currentQuestionKey = questionnaire[`essential${currentEssential}`][currentQuestion].question;
    console.log(currentQuestionKey);
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [currentQuestionKey]: selectedOption,
    }));
    
    // Check if the user answered "No," and if so, move to the next essential level
    if (selectedOption === "No"||currentQuestion===3) {
      setcurrentEssential((prevEssential)=>prevEssential+1);
      setCurrentQuestion(0);
    }
    else{
      setCurrentQuestion((prevQuestion)=>prevQuestion+1);
    }
    // Set the updated questions
  
    // Update the userResponses state
    
  };
  useEffect(() => {
    // This will be triggered whenever currentQuestion or currentEssential changes.
    console.log("called ",currentEssential,currentQuestion);
    console.log(`essential${currentEssential}`);
    console.log(questionnaire[`essential${currentEssential}`]);
    console.log("User Responses:", userResponses);
  }, [currentEssential, currentQuestion]);
  
  // Dynamically get the current essential questions based on the current maturity level
  const currentEssentialQuestions = useMemo(
    () => questionnaire[`essential${currentEssential}`],
    [currentEssential, questionnaire]
  );
  // console.log(currentEssential);
  // console.log(currentEssentialQuestions);
  // Find the index of the first unanswered question in the current essential level
  // const currentQuestionIndex = currentEssentialQuestions.findIndex(
  //   (question) => question.choosedOption === null
  // );

  // The questionnaire is completed when there are no more unanswered questions
  const isQuestionnaireCompleted = !currentEssentialQuestions;
  const generatePDFReport = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [210, 297], // A4 size (you can adjust the width and height as needed)
      compress: true,
      lineHeight: 1.2,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
    });
  
    doc.text(20, 20, 'User Assessment Report');
    let y = 40;
  
    // Set the maximum content width to fit within the page
    const maxWidth = doc.internal.pageSize.width - 25;
  
    Object.entries(userResponses).forEach(([question, response]) => {
      const questionText = `Question: ${question}`;
      const responseText = `Response: ${response}`;
      
      // Apply word wrapping to response text to prevent overflow
      const lines = doc.splitTextToSize(responseText, maxWidth);
      const liness = doc.splitTextToSize(questionText, maxWidth);
  
      // Calculate the height of the wrapped text
      const lineHeight = doc.getTextDimensions('M').h; // Use 'M' as a dummy character
      const wrappedTextHeight = lines.length * lineHeight;
      const wrappedTextHeights = liness.length * lineHeight;
  
      if (y + wrappedTextHeight + 10 > doc.internal.pageSize.height) {
        // Check if the content will exceed the page height
        doc.addPage(); // Add a new page if necessary
        y = 20; // Reset the vertical position for new page
      }
  
      // doc.text(20, y, questionText);
      doc.text(20, y, liness);
      y += wrappedTextHeights;
      doc.text(20, y + 7, lines);
      y += wrappedTextHeight + 20;
    });
  
    return doc.output('blob'); // Return the PDF content as a Blob
  };
  const handleDownloadPDF = () => {
    const pdfBlob = generatePDFReport();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'user_report.pdf';
    link.click();
  };

  useEffect(() => {
    if (isQuestionnaireCompleted) {
      console.log("heyyyyyyyyy");
      generatePDFReport();
    }
  }, [isQuestionnaireCompleted]);
  return (
    <div className="App">
      {isQuestionnaireCompleted ? (
        <div>
          <h1>Congratulations! You have completed the assessment.</h1>
          {/* Add any submission or completion message here */}
          <div>
            <h2>User Responses:</h2>
            {Object.keys(userResponses).map((question) => (
              <div>
                <strong>Question:</strong>{question}
                <br />
                <strong>Response:</strong>{userResponses[question]} 
                <br />
                <br />
              </div>
            ))}
            <button onClick={handleDownloadPDF}>Download PDF</button>
          </div>
        </div>
      ) : (
        <>
          {currentEssentialQuestions && currentEssentialQuestions.length > 0 && (
            <Question
              question={questionnaire[`essential${currentEssential}`][currentQuestion]}
              onOptionChange={(selectedOption) => handleOptionChange(selectedOption)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
