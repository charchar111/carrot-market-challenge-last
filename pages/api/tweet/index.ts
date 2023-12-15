import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@/lib/server/withHandler";
import db from "@/lib/db";
import withAPISession from "@/lib/server/withAPISession";

export type ResponseDataTweet = {
  ok: boolean;
  message?: string;
  error?: { message: string };
  tweets: any;
};

async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataTweet>
) {
  const tweets = await db.tweet.findMany({
    where: {},
    include: {
      user: { select: { username: true, name: true, avatar: true } },
      _count: { select: { Favorites: true } },
    },
  });

  return res.status(200).json({ ok: true, tweets });
}

export default withAPISession(
  withHandler({
    method: ["GET"],
    handler: Handler,
  })
);
