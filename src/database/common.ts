import { database } from "../firebase/database";
import { FirebaseObject, FLink } from "../types";
import { OmitId, QueryKey } from "@firestore-simple/web/dist/types";

const getDao = (path: string) => database.collection<FLink>({ path });

export interface QueryOptions<T extends FirebaseObject> {
  limit?: number;
  sort?: { by: QueryKey<OmitId<T>>; order: "asc" | "desc" };
  startAfter?: T;
}

const getQuery = (path: string, options: QueryOptions<FLink>) => {
  const query = getDao(path).limit(options.limit ?? 50);
  if (options.sort) query.orderBy(options.sort.by, options.sort.order);
  if (options.startAfter) query.startAfter(options.startAfter);
  return query;
};

export { getQuery };
