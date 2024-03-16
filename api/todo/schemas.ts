import { z } from "zod";

export const todotSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  completed: z.boolean(),
});
