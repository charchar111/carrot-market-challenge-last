import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/server/withHandler";
import useBcrypts from "../../../lib/server/bcrypts";

type ResponseData = {
  ok: boolean;
  message?: string;
  error?: { message: string };
};

async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // const { email, username, password } = req.body;

  // if (!(email && username && password))
  //   return res.status(400).json({ ok: false });
  // console.log(email, username, password);
  // const Bcrypts = useBcrypts();
  // const hashedPassword = await Bcrypts.hassing(password);
  // console.log(hashedPassword);
  // const match = await Bcrypts.comparing(password, hashedPassword);
  // console.log(match);

  return res.status(200).json({ ok: true });
}

export default withHandler({
  method: ["POST"],
  handler: Handler,
  isPrivated: false,
});
