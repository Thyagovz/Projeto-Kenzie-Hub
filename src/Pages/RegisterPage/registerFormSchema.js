import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("Campo obrigatório"),
    email: z
      .string()
      .nonempty("Campo obrigatório")
      .email("Forneça um email válido"),
    password: z
      .string()
      .nonempty("Campo obrigatório")
      .min(8, "É necessário pelo menos oito caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ter pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ter pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário ter pelo menos um número"),
    confirmPassword: z
      .string()
      .nonempty("Campo obrigatório")
      .min(8, "É necessário confirmar a senha"),
    bio: z.string().nonempty("Campo obrigatório"),
    contact: z.string().nonempty("Campo obrigatório"),
    course_module: z.string().nonempty("Campo obrigatório"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "A senhas não correspondem",
    path: ["confirmPassword"],
  });
