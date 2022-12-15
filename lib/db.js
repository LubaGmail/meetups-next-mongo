const { MongoClient, ObjectId } = require('mongodb');
// import { MongoClient } from 'mongodb'  // issues with importing 

export const connectMongo = async () => {
    const username = process.env.mongo_username
    const pass = process.env.mongo_pass
    const cluster = process.env.mongo_cluster
    // const mongoUri = process.env.mongoUri
    const constructedUri = 'mongodb+srv://' + username + ":" + pass + "@" + cluster

    const client = await MongoClient.connect(constructedUri)
    return client
}

export const getCollection = (client, dbName, collName) => {
    const db = client.db(dbName)
    const collObj = db.collection(collName)
    return collObj
}

export const insertRecord = async (client, record) => {
    const collection = getCollection(client, 'events', 'meetups')
    return await collection.insertOne(record)
}

export const allRecords = async (client) => {
    const collection = getCollection(client, 'events', 'meetups')
    return await collection.find().toArray()
}

export const selectedRecords = async (client, query) => {
    const collection = getCollection(client, 'events', 'meetups')
    return await collection.find(query).toArray()
}

export const oneRecord = async (client, id) => {
    const collection = getCollection(client, 'events', 'meetups')
    return await collection.findOne({ "_id": ObjectId(id) })
}

// use es6 syntax instead
// module.exports = {
//     connectMongo,
//     insertRecord,
//     allRecords,
//     selectedRecords,
//     oneRecord
// };
