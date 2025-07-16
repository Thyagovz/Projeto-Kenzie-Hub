import { z } from "zod";

export const loginFormSchema = z.object({
  name: z.string().nonempty("Campo obrigatório"),
  email: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Forneça um email válido"),
  password: z.string().nonempty("Campo obrigatório"),
});
