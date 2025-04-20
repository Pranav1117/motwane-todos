const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const { ERROR } = require("../constants");
dotenv.config();

const uri = process.env.MONGO_CONNECTION_STRING;

let db;
let client;

const connectToDB = async () => {
  if (db) return;
  try {
    client = await MongoClient.connect(uri);
    db = client.db("motwane-todos");
  } catch (error) {
    throw new Error(ERROR.DB_CONNECTION_FAILED);
  }
};

const getDB = () => {
  if (!db) throw new Error(ERROR.DB_NOT_CONNECTED);
  return db;
};

module.exports = { connectToDB, getDB };
