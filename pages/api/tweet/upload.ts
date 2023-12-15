import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@/lib/server/withHandler";
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
  //   console.log(req.body);
  const { content } = req.body;

  if (!content) return res.status(400).json({ ok: false });

  await db.tweet.create({
    data: {
      image: "",
      content,
      user: { connect: { id: req.session.user?.id } },
    },
  });

  return res.status(200).json({ ok: true });
}

export default withAPISession(
  withHandler({
    method: ["POST"],
    handler: Handler,
  })
);
