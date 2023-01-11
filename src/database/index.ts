import { connect } from "mongoose";
import { DB_HOST, DB_NAME, DB_PORT } from "../config";

export const runDatabase = async () => {
  await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
};
