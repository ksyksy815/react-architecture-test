import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import promptClient from "@/api/prompt/promt-client";
import queryKeys from "./query-keys";
import dayjs from "dayjs";

const emptyPrompt = {
  title: "",
  answers: [],
  answered: false,
};

export default function usePrompt() {
  const queryClient = useQueryClient();

  const formatPrompt = (prompt) => {
    return {
      ...prompt,
      answers: prompt.answers.map((answer) => ({
        ...answer,
        createdAt: dayjs(answer.createdAt).fromNow(true),
      })),
    };
  };

  const prompt = useQuery({
    queryKey: [queryKeys.prompt],
    queryFn: promptClient.getActivePrompt,
    initialData: emptyPrompt,
    select: (prompt) => formatPrompt(prompt),
  });

  const mutation = useMutation({
    mutationFn: promptClient.createAnswer,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.prompt]);
    },
  });

  const handleSubmit = (answer) => {
    mutation.mutate(answer);
  };

  return {
    prompt,
    handleSubmit,
  };
}
