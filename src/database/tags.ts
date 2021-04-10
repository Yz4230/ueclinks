import { database } from "../firebase/database";
import { Tag } from "../types";
import { QueryOptions } from "./common";

const getTagsDao = () => database.collection<Tag>({ path: "tags" });

const getAllTags = (options: QueryOptions<Tag>) => {
  const query = getTagsDao()
    .orderBy("createdAt", "desc")
    .limit(options.limit ?? 50);
  if (options.startAfter) query.startAfter(options.startAfter);
  return query.fetch();
};

export { getAllTags };
