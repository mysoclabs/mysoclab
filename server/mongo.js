import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017";
const dbName = process.env.MONGODB_DB ?? "mysoclab";

let client;
let clientPromise;

export async function getDb() {
  if (!clientPromise) {
    client = new MongoClient(mongoUri);
    clientPromise = client.connect();
  }

  const connectedClient = await clientPromise;
  return connectedClient.db(dbName);
}
