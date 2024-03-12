"use client";

import PromptContent from "@/components/shared/PromptContent";
import RandomInspirationalQuote from "@/components/shared/RandomInspirationalQuote";
import usePrompt from "@/hooks/usePrompt";

export default function Home() {
  const { prompt, handleSubmit } = usePrompt();

  return (
    <div>
      {prompt ? (
        <PromptContent prompt={prompt} />
      ) : (
        <RandomInspirationalQuote />
      )}
    </div>
  );
}
