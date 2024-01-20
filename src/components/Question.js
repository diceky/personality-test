import React, { useState, useRef } from "react";
import Styles from "./Question.module.css";
import FeatherIcon from 'feather-icons-react';

const Question = ({onNext, onBack, onAnswer, answers}) => {
    
    const buttonRef = useRef(null);

    const [currentQuestion, setCurrentQuestion] = useState(1);

    const questionsList = [
        "お風呂は好きですか？",
        "ワサビは好きですか？",
        "コーヒーは好きですか？",
        "ジェットコースターは好きですか？",
        "子供は好きですか？",
    ];

    const answers1 = [
        "はい1",
        "いいえ1",
        "分かりません1"
    ];

    const answers2 = [
        "はい2",
        "いいえ2",
        "分かりません2"
    ];

    const answers3 = [
        "はい3",
        "いいえ3",
        "分かりません3"
    ];

    const answers4 = [
        "はい4",
        "いいえ4",
        "分かりません4"
    ];

    const answers5 = [
        "はい5",
        "いいえ5",
        "分かりません5"
    ];

    const answersList = [
        answers1,
        answers2,
        answers3,
        answers4,
        answers5
    ];

    const handleBack = () => {
        if(currentQuestion===1){
            onBack();
        }
        else{
            setCurrentQuestion((prev) => prev - 1);
        }
    }

    const handleAnswer = (event) => {
        onAnswer(currentQuestion, event.currentTarget.id);

        if(currentQuestion===5) {
            onNext();
        }
        else{
            setCurrentQuestion((prev) => prev + 1);
        }
    }

    return(
        <div className={Styles.wrapper}>
            <p>{answers}</p>
            <button onClick={handleBack} className={Styles.back}>
                <FeatherIcon icon="arrow-left" />
            </button>
            <p className={Styles.title}>{`QUESTION ${currentQuestion}`}</p>
            <div className={Styles.questionWrapper}>
                <p className={Styles.question}>{questionsList[currentQuestion-1]}</p>
                <div className={Styles.answerWrapper}>
                    {answersList[currentQuestion-1].map((val,index) => (
                        <button ref={buttonRef} id={index+1} key={index+1} onClick={handleAnswer} className={Styles.answer}>{val}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Question;