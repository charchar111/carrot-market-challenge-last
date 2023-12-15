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

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { email, password } = req.body;
  if (!(email && password)) return res.status(400).json({ ok: false });
  const user = await db.user.findUnique({ where: { email } });
  if (!user)
    return res.status(404).json({
      ok: false,
      error: { message: "user account or password doesn't match" },
    });
  const Bcrypts = useBcrypts();
  const match = await Bcrypts.comparing(password, user?.password);
  if (!match)
    return res.status(404).json({
      ok: false,
      error: { message: "user account or password doesn't match" },
    });
  console.log(user);
  req.session.user = { id: user.id };
  await req.session.save();

  return res.status(200).json({ ok: true });
}

export default withAPISession(
  withHandler({
    method: ["POST"],
    handler: Handler,
    isPrivated: false,
  })
);
