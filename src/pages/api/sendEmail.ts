import { formValue } from "./../../components/emailFrom";
import { Resend } from "resend";

import MessageUsEmail from "@/components/emailMessage";
import { NextApiResponse, NextApiRequest } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  const { name, occasion } = (await req.body) as formValue;

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // your verified domain
      to: "thejes@hotmail.nl", // the email address you want to send a message
      subject: `${name} - ${occasion}`,
      react: MessageUsEmail(req.body as formValue),
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
