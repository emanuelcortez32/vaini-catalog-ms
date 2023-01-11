declare namespace Express {
  interface Request {
    auth: {
      sub: string;
      authorities: string[];
      id: string;
    };
  }
}
