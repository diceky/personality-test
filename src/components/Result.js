import React, { useState } from "react";
import Styles from "./Result.module.css";

const Result = ({onReset, answers}) => {

    const explanations = [
        "タイプ1はこんな人。タイプ1はこんな人。タイプ1はこんな人。タイプ1はこんな人。タイプ1はこんな人。タイプ1はこんな人。",
        "タイプ2はこんな人。タイプ2はこんな人。タイプ2はこんな人。タイプ2はこんな人。タイプ2はこんな人。タイプ2はこんな人。",
        "タイプ3はこんな人。タイプ3はこんな人。タイプ3はこんな人。タイプ3はこんな人。タイプ3はこんな人。タイプ3はこんな人。"
    ];

    const actions = [
        "タイプ1におすすめはこんなこと。タイプ1におすすめはこんなこと。タイプ1におすすめはこんなこと。タイプ1におすすめはこんなこと。",
        "タイプ2におすすめはこんなこと。タイプ2におすすめはこんなこと。タイプ2におすすめはこんなこと。タイプ2におすすめはこんなこと。",
        "タイプ3におすすめはこんなこと。タイプ3におすすめはこんなこと。タイプ3におすすめはこんなこと。タイプ3におすすめはこんなこと。"
    ];

    let winner = 0;
    let runnerUp = 0;

    if(answers.length===5){
        const countObj = {};
        answers.forEach(element => {
            countObj[element] = (countObj[element] || 0) + 1;
        });
        //console.log(`countObj`);
        //console.log(countObj);
    
        const sortedObj = Object.entries(countObj).sort((x, y) => x[1] - y[1]).reverse();
        //console.log(`sortedObj`);
        //console.log(sortedObj);
    
        if(sortedObj.length > 1 && sortedObj[0][1]===sortedObj[1][1]){
            console.log(`Winner is ${sortedObj[0][0]} and ${sortedObj[1][0]}`);
            winner = parseInt(sortedObj[0][0]);
            runnerUp = parseInt(sortedObj[1][0]);
        }
        else{
            console.log(`Winner is ${sortedObj[0][0]}`);
            winner = parseInt(sortedObj[0][0]);
        }
      }

    return(
        <div className={Styles.wrapper}>
            <h3 className={Styles.subtitle}>あなたの結果は・・・</h3>
            {runnerUp > 0 ? (<h1 className={Styles.title}>{`タイプ${winner}と${runnerUp}です！`}</h1>) : (<h1 className={Styles.title}>{`タイプ${winner}です！`}</h1>)}
            <p className={Styles.section}>あなたのリラックスタイプ</p>
            <p className={Styles.explanations}>{explanations[winner-1]}</p>
            {runnerUp > 0 && ( <p className={Styles.explanations}>{explanations[runnerUp-1]}</p>)}
            <p className={Styles.section}>おすすめのリラックス方法</p>
            <p className={Styles.actions}>{actions[winner-1]}</p>
            {runnerUp > 0 && ( <p className={Styles.actions}>{actions[runnerUp-1]}</p>)}
            <button onClick={onReset} className={Styles.button}>もう一度やる</button>
        </div>
    );
};

export default Result;