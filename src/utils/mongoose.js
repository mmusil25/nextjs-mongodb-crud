import { connect, connection } from "mongoose";


const conn = {
  isConnected: false,
};

export async function dbConnect() {
  if (conn.isConnected) {
    return;
  }

  const db = await connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/nextjs" || "mongodb://my-nextmongo-cluster.cluster-cfqoee6ueqrd.us-east-2.docdb.amazonaws.com:27017/next-js"
  );
  // console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => console.log("Mongodb connected to db"));

connection.on("error", (err) => console.error("Mongodb Errro:", err.message));
