import clientPromise from "@/lib/mongodb"

export async function POST(req) {

    const body = await req.json()
    const client = await clientPromise;
    const db = client.db("clutter")
    const collection = db.collection("url")

    //Check if the short URL exist

    const doc = await collection.findOne({
        shorturl : body.shorturl
    })
    if(doc){
        return Response.json({ succes: false, error: true, message: 'URL already exists' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

  return Response.json({ succes: true, error: false, message: 'URL Generated Successfully' })
}