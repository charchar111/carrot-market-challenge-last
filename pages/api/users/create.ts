import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@/lib/server/withHandler";
import useBcrypts from "@/lib/server/bcrypts";
import db from "@/lib/db";
import withAPISession from "@/lib/server/withAPISession";

type ResponseData = {
  ok: boolean;
  message?: string;
  error?: { message: string };
};

async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { email, username, password } = req.body;

  if (!(email && username && password))
    return res.status(400).json({ ok: false });

  const Bcrypts = useBcrypts();
  const hashedPassword = await Bcrypts.hassing(password);
  // const match = await Bcrypts.comparing(password, hashedPassword);

  await db.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
      name: username,
      avatar: "",
    },
  });

  return res.status(200).json({ ok: true });
}

export default withAPISession(
  withHandler({
    method: ["POST"],
    handler: Handler,
    isPrivated: false,
  })
);
