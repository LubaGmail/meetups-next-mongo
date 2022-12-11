const MongoClient = require('mongodb').MongoClient 

const connectMongo = async () => {
    console.log('in coonnectMongo')
    const username = process.env.mongo_username
    const pass = process.env.mongo_pass
    const cluster = process.env.mongo_cluster
    const mongoUri = process.env.mongoUri
    const constructedUri = 'mongodb+srv://' + username + ":" + pass + "@" + cluster
    console.log('constructed/mongoUri', constructedUri, mongoUri)

    const client = await MongoClient.connect(constructedUri)
    return client
}

const insertRecord = async (client, record) => {
    const db = client.db('events')
    const coll = db.collection('meetups')
    const result = await coll.insertOne(record)

    return result
}

module.exports = {
    connectMongo,
    insertRecord,
};
