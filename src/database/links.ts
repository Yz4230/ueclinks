import { database } from "../firebase/database";
import { FLink, Link } from "../types";
import { QueryOptions } from "./common";
import firebase from "firebase/app";

const getLinksDao = () => database.collection<FLink>({ path: "links" });

const getAllLinks = (options?: QueryOptions<FLink>) => {
  const query = getLinksDao()
    .orderBy("createdAt", "desc")
    .limit(options?.limit ?? 50);
  if (options?.startAfter) query.startAfter(options.startAfter);
  return query.fetch();
};

const findLinksByKeyword = (keyword: string, options?: QueryOptions<FLink>) => {
  const query = getLinksDao()
    .where("keywords", "array-contains", keyword)
    .orderBy("createdAt", "desc")
    .limit(options?.limit ?? 50);
  if (options?.startAfter) query.startAfter(options.startAfter);

  return query.fetch();
};

const createLink = (obj: Link) =>
  getLinksDao().add({
    ...obj,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });

const updateLink = (obj: FLink) => getLinksDao().set(obj);

const deleteLink = (obj: FLink) => getLinksDao().delete(obj.id);

export { getAllLinks, findLinksByKeyword, createLink, updateLink, deleteLink };
