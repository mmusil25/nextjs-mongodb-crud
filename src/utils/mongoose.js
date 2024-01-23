import { connect, connection } from "mongoose";

var mydb = "mongodb://mongodb:helloworld@my-nextmongo-cluster.cluster-cfqoee6ueqrd.us-east-2.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false"

const conn = {
  isConnected: false,
};

export async function dbConnect() {
  if (conn.isConnected) {
    return;
  }

  const db = await connect(
    process.env.MONGODB_URI || mydb //"mongodb://localhost:27017/nextjs"
  );
  // console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => console.log("Mongodb connected to db"));

connection.on("error", (err) => console.error("Mongodb Errro:", err.message));
