import { NextApiRequest, NextApiResponse } from "next";
export type ResponseData = {
  ok: boolean;
  message?: string;
  error?: { message: string };
};
interface IWithHandler {
  method: string[];
  handler: Function;
  isPrivated?: boolean;
}

export default function withHandler({
  method,
  handler,
  isPrivated = true,
}: IWithHandler) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    if (!req.method || !method.includes(req.method))
      return res.status(405).json({ ok: false });
    // 유저 인증
    // if(isPrivated &&) return res.status(401).json({ ok: false });

    try {
      await handler(req, res);
    } catch (error) {
      console.log("with handler error", error);
      return res.status(500).json({ ok: false });
    }
  };
}
