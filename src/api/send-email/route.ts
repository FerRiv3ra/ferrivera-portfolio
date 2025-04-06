import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
  url: 'https://api.mailgun.net', // o https://api.eu.mailgun.net si estás en Europa
});

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: 'Campos requeridos' },
      { status: 400 }
    );
  }

  try {
    const res = await mg.messages.create(process.env.MAILGUN_DOMAIN || '', {
      from: 'Formulario Web <contact@ferriv3ra.dev>',
      to: process.env.MAILGUN_TO || '',
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje:\n${message}`,
    });

    return NextResponse.json({ success: true, data: res });
  } catch (error: any) {
    console.error('Mailgun error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
