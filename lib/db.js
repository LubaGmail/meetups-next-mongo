const { MongoClient, ObjectId } = require('mongodb');

const connectMongo = async () => {
    const username = process.env.mongo_username
    const pass = process.env.mongo_pass
    const cluster = process.env.mongo_cluster
    const mongoUri = process.env.mongoUri
    const constructedUri = 'mongodb+srv://' + username + ":" + pass + "@" + cluster

    const client = await MongoClient.connect(constructedUri)
    return client
}

const insertRecord = async (client, record) => {
    const db = client.db('events')
    const coll = db.collection('meetups')
    const result = await coll.insertOne(record)

    return result
}

const allRecords = async (client) => {
    const db = client.db('events')
    const coll = db.collection('meetups')
    let cursor = await coll.find()
   
    let arr = await cursor.toArray()
    return arr
}

const selectedRecords = async (client, query) => {
    const db = client.db('events')
    const coll = db.collection('meetups')
    let cursor = await coll.find(query)
   
    return cursor.toArray()
}

const oneRecord = async (client, id) => {
    const db = client.db('events')
    const coll = db.collection('meetups')
    const res = await coll.findOne({ "_id": ObjectId(id) });
    
    return res
}


module.exports = {
    connectMongo,
    insertRecord,
    allRecords,
    selectedRecords,
    oneRecord
};
