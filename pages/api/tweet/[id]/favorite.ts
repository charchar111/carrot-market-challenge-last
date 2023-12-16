import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@/lib/server/withHandler";
import db from "@/lib/db";
import withAPISession from "@/lib/server/withAPISession";

export type ResponseDataTweet = {
  ok: boolean;
  message?: string;
  error?: { message: string };
  tweet?: any;
};

async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataTweet>
) {
  const { id } = req.query;
  if (!id) return res.status(404).json({ ok: false });
  console.log("id", id);

  const alreadyFavorite = await db.favorite.findFirst({
    where: { userId: req.session.user?.id!, tweetId: +id.toString() },
  });

  console.log("alreadyFavorite", alreadyFavorite);

  if (alreadyFavorite) {
    await db.favorite.delete({
      where: { id: alreadyFavorite.id },
    });
  } else {
    await db.favorite.create({
      data: { tweetId: +id.toString(), userId: req.session.user?.id! },
    });
  }

  return res.status(200).json({ ok: true });
}

export default withAPISession(
  withHandler({
    method: ["POST"],
    handler: Handler,
  })
);
