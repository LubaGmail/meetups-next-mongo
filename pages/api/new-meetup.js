import { connectMongo, insertRecord } from "../../lib/db"

const validate = (title, image, address, desc) => {
    if (
        !title || title?.length < 2 ||
        !image || image?.length < 2 ||
        !address || address?.length < 2 ||
        !desc || desc?.length < 2
    ) {
        return false
    }
    return true
}


const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(500).json({ appStatus: 'error', detail: 'Invalid http method' })
        throw new Error(req.method + ' is not valid for current operation.')
    }

    const {title, image, address, desc} = { ...req.body }
    if (!validate(title, image, address, desc)) {
        res.status(422).json({ appStatus: 'error', detail: 'Server side validation failed.' })
        throw new Error(req.method + 'Server side validation failed.')
    }

    let client
    try {
        client = await connectMongo()
    } catch (error) {
        res.status(500).json({ appStatus: 'error', detail: error.toString() })
    }

    let insertResult
    try {
        insertResult = await insertRecord(client, req.body)
    } catch (error) {
        res.status(500).json({ appStatus: 'error', detail: error.toString() })
        throw new Error(req.method + 'error.toString()')
    }

    res.status(200).json({ appStatus: 'success', detail: insertResult })
}

export default handler
  