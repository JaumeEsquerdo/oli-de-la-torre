// app/actions.ts
"use server";

import { Resend } from "resend";

// Inicializas Resend con tu API Key (guárdala en tu archivo .env.local)
const resend = new Resend(process.env.RESEND_API_KEY);

interface FormState {
  success: boolean;
  message?: string;
  error?: string;
}

export async function sendContactEmail(
  prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validación básica
  if (!email || !message) {
    return { success: false, error: "Por favor, rellena todos los campos." };
  }

  try {
    await resend.emails.send({
      from: "Contacto Web <onboarding@resend.dev>", // Cambia por tu dominio cuando lo verifiques
      to: "tu-email-personal@gmail.com", // El correo donde quieres recibir los mensajes
      subject: "Nuevo mensaje de contacto directo",
      text: `Email del remitente: ${email}\n\nMensaje:\n${message}`,
    });

    return { success: true, message: "¡Mensaje enviado con éxito!" };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Hubo un error al enviar el correo." };
  }
}
