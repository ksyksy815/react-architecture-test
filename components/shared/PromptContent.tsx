import React from "react";
import AnswerForm from "./AnswerForm";
import AnswersList from "./AnswersList";

type Props = {
  prompt: any;
};
export default function PromptContent({ prompt }: Props) {
  if (!prompt.answered) {
    return <AnswerForm />;
  }

  return <AnswersList answers={prompt.answers} />;
}
