import { z } from "zod";

export const promptSchema = z.object({
  title: z.string(),
  answers: z.array(
    z.object({
      text: z.string(),
      author: z.object({
        name: z.string(),
      }),
      createdAt: z
        .string()
        .refine((value) => !isNaN(Date.parse(value)), {
          message: "Invalid date",
        }),
    })
  ),
});
