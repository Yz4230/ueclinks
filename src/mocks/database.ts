import { FirestoreSimple } from "@firestore-simple/web";
import { Link } from "../types";
import firebase from "firebase/app";

const insertMockData = async (database: FirestoreSimple) => {
  await database
    .collection<Link>({ path: "links" })
    .add({
      title: "link 1",
      description: "desc 1",
      keywords: ["a", "b", "c"],
      href: "https://uec.ac.jp/a",
      onCampusOnly: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  await database
    .collection<Link>({ path: "links" })
    .add({
      title: "link 2",
      description: "desc 2",
      keywords: ["b", "c", "d"],
      href: "https://uec.ac.jp/b",
      onCampusOnly: true,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  await database
    .collection<Link>({ path: "links" })
    .add({
      title: "link 3",
      description: "desc 3",
      keywords: ["c", "d", "e"],
      href: "https://uec.ac.jp/c",
      onCampusOnly: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};

export { insertMockData };
