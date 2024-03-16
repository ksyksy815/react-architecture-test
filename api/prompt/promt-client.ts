import axios from "axios";
import endpoints from "./endpoints";
import { promptSchema } from "./schemas";

const api = axios.create({
  baseURL: endpoints.baseURL,
});

const getActivePrompt = async () => {
  const { data } = await api.get(endpoints.activePrompt);

  return promptSchema.parse(data);
};

const createAnswer = async (answer) => {
  return await api.post(endpoints.createAnswer, { answer });
};

const promptClient = {
  getActivePrompt,
  createAnswer,
};

export default promptClient;
