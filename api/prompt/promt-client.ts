import axios from "axios";
import endpoints from "./endpoints";
import { promptSchema } from "./schemas";

const api = axios.create({
  baseURL: endpoints.baseURL,
});

export function getActivePrompt() {
  const { data } = api.get(endpoints.activePrompt);

  return promptSchema.parse(data);
}

export function createAnswer(answer) {
  return api.post(endpoints.createAnswer, { answer });
}

export default {
  getActivePrompt,
  createAnswer,
};
