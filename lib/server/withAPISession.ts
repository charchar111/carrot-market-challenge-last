import { withIronSessionApiRoute } from "iron-session/next";

const SessionOption = {
  cookieName: "tweet-clone-id",
  password: "1x2sj3]8jd1k193d8c1nm23281m3c82m132c1mcc18c1cm1cm",
  // for test, change if real production
};
export default function withAPISession(handler: any) {
  return withIronSessionApiRoute(handler, SessionOption);
}
