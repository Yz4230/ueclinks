import { FirestoreSimple } from "@firestore-simple/web";
import { firestore } from "./index";

const database = new FirestoreSimple(firestore);
export { database };
