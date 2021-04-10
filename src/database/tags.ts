import { database } from "../firebase/database";
import { FTag } from "../types";
import { QueryOptions } from "./common";

const getTagsDao = () => database.collection<FTag>({ path: "tags" });

const getAllTags = (options: QueryOptions<FTag>) => {
  const query = getTagsDao()
    .orderBy("createdAt", "desc")
    .limit(options.limit ?? 50);
  if (options.startAfter) query.startAfter(options.startAfter);
  return query.fetch();
};

export { getAllTags };
