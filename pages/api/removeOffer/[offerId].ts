import { NextApiRequest, NextApiResponse } from "next";
import connectToMongoDB from "utils/mongoDB";
import offer from "models/offer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  (async () => {
    try {
      const { offerId } = req.query;
      await connectToMongoDB();
      await offer.findOneAndRemove({ _id: offerId });
      return res.status(200).json({message: "The offer has been successfully removed."})
    } catch (err) {
      console.log(err);
    }
  })();
}

export const config = {
  api: {
    externalResolver: true,
  },
};
