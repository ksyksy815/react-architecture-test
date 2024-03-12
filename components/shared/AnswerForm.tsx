import usePrompt from "@/hooks/usePrompt";
import React from "react";

const AnswerForm = () => {
  const { handleSubmit } = usePrompt();
  return (
    <form className={`p-3 border bg-slate-100`} onSubmit={handleSubmit}>
      <textarea></textarea>
      <button>Submit</button>
    </form>
  );
};

export default AnswerForm;
