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
  const user = req.session?.user!;
  const existUser = await db.user.findUnique({
    where: { id: user?.id },
    select: { id: true },
  });
  console.log("existUser", existUser);
  if (!existUser) return res.status(404).json({ ok: false });
  return res.status(200).json({ ok: true });
}

export default withAPISession(
  withHandler({
    method: ["GET"],
    handler: Handler,
  })
);
