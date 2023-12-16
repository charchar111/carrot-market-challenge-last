import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@/lib/server/withHandler";
import db from "@/lib/db";
import withAPISession from "@/lib/server/withAPISession";

export type ResponseDataTweet = {
  ok: boolean;
  message?: string;
  error?: { message: string };
  tweet: any;
  isLiked: boolean;
};

async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataTweet>
) {
  const { id } = req.query;
  console.log("id", id);
  const tweet = await db.tweet.findUnique({
    where: { id: +id.toString() },
    include: {
      user: { select: { username: true, name: true, avatar: true } },
      _count: { select: { Favorites: true } },
    },
  });

  const isLiked = Boolean(
    await db.favorite.findFirst({
      where: { userId: req.session.user?.id, tweetId: +id.toString() },
    })
  );
  console.log("isLiked", isLiked);

  return res.status(200).json({ ok: true, tweet, isLiked });
}

export default withAPISession(
  withHandler({
    method: ["GET"],
    handler: Handler,
  })
);
