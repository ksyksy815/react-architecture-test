import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

type Props = {
  answers: any[];
};
const AnswersList = ({ answers }: Props) => {
  return (
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <p>{answer.text}</p>
          <div>— {answer.author.name}</div>
          <div>{answer.createdAt}</div>
        </div>
      ))}
    </div>
  );
};

export default AnswersList;
