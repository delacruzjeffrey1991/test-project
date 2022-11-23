import React from "react";
import Styles from "./styles.module.scss";
import Heading from "../common/Heading";

function QuestionRadioBox(props:any) {
  const questions = [
    {
      id: "1",
      question: "Mission",
      answers: [
        {
          id: "ans1a",
          value: "Strength",
          name: "mission",
        },
        {
          id: "ans1b",
          value: "Opportunity",
          name: "mission",
        },
      ],
    },
    {
      id: "2",
      question: "Story",
      answers: [
        {
          id: "ans2a",
          value: "Strength",
          name: "story",
        },
        {
          id: "ans2b",
          value: "Opportunity",
          name: "story",
        },
      ],
    },
  ];
  console.log("questions ", questions[0].answers);
  return (
    <div className={Styles.boxQuest}>
      <div className={Styles.boxHeading}><Heading label={props.heading} variant="heading4" /></div>
      {questions.map((ques) => {
        return (
          <div key={ques.id} className={Styles.ansRadio}>
            <p> {ques.question} </p>
            <ul>
              {ques.answers.map((ans, index) => {
                return (
                  <li key={index}>
                    <input type="radio" name={`${ans.name}`} />
                    <label htmlFor={`${ans.name}`}> {ans.value} </label>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}


export default QuestionRadioBox;
