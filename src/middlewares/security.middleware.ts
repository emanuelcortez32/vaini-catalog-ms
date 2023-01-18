import { expressjwt as jwt } from "express-jwt";
import { TOKEN_SECRET } from "../config";

const unlessOptions = {
  path: ["/health"],
}

export const tokenAuthentication = () =>
  jwt({
    secret: TOKEN_SECRET,
    algorithms: ["HS256"],
  }).unless(unlessOptions);
