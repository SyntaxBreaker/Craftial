import { NextApiRequest, NextApiResponse } from "next";
import connectToMongoDB from "../../../utils/mongoDB";
import offer from "../../../models/offer";

type Data = {
    name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let favoriteOfferIDs =
    typeof req.query.ids === "string"
        ? req.query.ids.split(",")
        : req.query.ids;

    const favoriteOffers = await offer.find({_id: {
        $in: favoriteOfferIDs
    }})

    res.json(favoriteOffers);
}

export const config = {
    api: {
        externalResolver: true,
    },
};