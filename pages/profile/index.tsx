import ProfileLayout from "components/ProfileLayout";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import connectToMongoDB from "utils/mongoDB";
import offer from "models/offer";
import { IOffer, IUser } from "types";

function Profile({ offers, user }: { offers: IOffer[]; user: IUser }) {
  return <ProfileLayout offers={offers} user={user} />;
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    await connectToMongoDB();
    const doc = JSON.parse(
      JSON.stringify(await offer.find({ email: session?.user.email }))
    );
    return {
      props: {
        offers: doc,
      },
    };
  },
});

export default Profile;
