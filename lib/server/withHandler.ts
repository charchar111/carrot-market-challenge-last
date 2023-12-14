import { NextApiRequest, NextApiResponse } from "next";
type ResponseData = {
  ok: boolean;
  message?: string;
  error?: { message: string };
};
interface IWithHandler {
  method: string[];
  handler: Function;
  isPrivated?: boolean;
}

export default async function withHandler({
  method,
  handler,
  isPrivated = true,
}: IWithHandler) {
  console.log("withHandler");
  return async function returnHandler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    return res.status(200).json({ ok: true });
  };
  //   return async function (
  //     req: NextApiRequest,
  //     res: NextApiResponse<ResponseData>
  //   ) {
  //     return res.status(200).json({ ok: true });

  //     if (!req.method || !method.includes(req.method))
  //       return res.status(405).json({ ok: false });
  //     // 유저 인증
  //     // if(isPrivated &&) return res.status(401).json({ ok: false });

  //     try {
  //       await handler(req, res);
  //     } catch (error) {
  //       console.log("with handler error", error);
  //       return res.status(500).json({ ok: false });
  //     }
  //   };
}
