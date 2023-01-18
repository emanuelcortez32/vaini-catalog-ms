import { connect } from "mongoose";
import { DB_USER, DB_NAME, DB_PASSWORD } from "../config";

export const runDatabase = async () => {
  await connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.u6flvrh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);
};
