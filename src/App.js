import React, {useState} from "react";
import './App.css';
import Layout from "./components/Layout";
import Intro from "./components/Intro";
import Question from "./components/Question";
import Result from "./components/Result";

const App = () => {

  const [appState, setAppState] = useState(0);
  const [answers, setAnswers] = useState([]);

  const incrementState = () => {
    setAppState((prev) => prev + 1);
  }

  const decrementState = () => {
    setAppState((prev) => prev - 1);
  }

  const resetState = () => {
    setAnswers([]);
    setAppState(0);
  }

  const handleAnswer = (questionId, target) => {
    let temp = [];
    temp = answers;
    temp[questionId-1] = target;
    setAnswers(temp);
  }

  return (
    <Layout>
      {appState === 0 && <Intro onNext={incrementState} />}
      {appState === 1 && <Question onNext={incrementState} onBack={decrementState} onAnswer={handleAnswer} answers={answers}/>}
      {appState === 2 && <Result onReset={resetState} answers={answers}/>}
    </Layout>
  );
}

export default App;
