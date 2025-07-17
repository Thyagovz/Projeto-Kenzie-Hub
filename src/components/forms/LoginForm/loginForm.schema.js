import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Forneça um email válido"),
  password: z.string().nonempty("Campo obrigatório"),
});
