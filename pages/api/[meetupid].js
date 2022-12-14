import { connectMongo, selectedRecords, oneRecord} from "../../lib/db"

const handler = async (req, res) => {
    
    if (req.method !== 'GET') {
        res.status(500).json({ appStatus: 'error', detail: 'Invalid http method' })
        throw new Error(req.method + ' is not valid for current operation.')
    }

    let client
    try {
        client = await connectMongo()
    } catch (error) {
        res.status(500).json({ appStatus: 'error', detail: error.toString() })
        throw new Error(error.toString())
    }

    let result
    if (req.query.meetupid === 'featured') {
        try {
            result = await selectedRecords(client, {"featured": true})
        } catch (error) {
            if (client) client.close()
            res.status(500).json({ appStatus: 'error', detail: error.toString() })
            throw new Error(error.toString())
        }
    } else {
        try {
            result = await oneRecord(client, req.query.meetupid)
        } catch (error) {
            if (client) client.close()
            res.status(500).json({ appStatus: 'error', detail: error.toString() })
            throw new Error(error.toString())
        }
    }

    if (client) client.close()
    res.status(200).json({appStatus: 'success', detail: result})
}

export default handler