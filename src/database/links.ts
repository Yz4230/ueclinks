import { database } from "../firebase/database";
import { Link } from "../types";
import { QueryOptions } from "./common";

const getLinksDao = () => database.collection<Link>({ path: "links" });

const getAllLinks = (options?: QueryOptions<Link>) => {
  const query = getLinksDao()
    .orderBy("createdAt", "desc")
    .limit(options?.limit ?? 50);
  if (options?.startAfter) query.startAfter(options.startAfter);
  return query.fetch();
};

const findLinksByKeyword = (keyword: string, options?: QueryOptions<Link>) => {
  const query = getLinksDao()
    .where("keywords", "array-contains", keyword)
    .orderBy("createdAt", "desc")
    .limit(options?.limit ?? 50);
  if (options?.startAfter) query.startAfter(options.startAfter);

  return query.fetch();
};

const createLink = (obj: Link) => getLinksDao().add(obj);

const updateLink = (obj: Link) => getLinksDao().set(obj);

const deleteLink = (obj: Link) => getLinksDao().delete(obj.id);

export { getAllLinks, findLinksByKeyword, createLink, updateLink, deleteLink };
