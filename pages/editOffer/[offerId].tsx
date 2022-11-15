import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState, useEffect } from "react";
import Form from "components/Form";
import { IForm } from "types";
import { useRouter } from "next/router";
import connectToMongoDB from "utils/mongoDB";
import offer from "models/offer";
import { GetServerSidePropsContext } from "next";
import { handleChange, handleSubmit } from "utils/formController";
import Head from "next/head";

export default withPageAuthRequired(function EditOffer({ offerToEdit, user }) {
    const [offer, setOffer] = useState<IForm>({
        name: offerToEdit.name,
        location: offerToEdit.location,
        price: offerToEdit.price,
        email: offerToEdit.email,
        phoneNumber: offerToEdit.phoneNumber,
        description: offerToEdit.description,
        images: [],
    });

    const router = useRouter();
    const { offerId } = router.query;

    useEffect(() => {
        user.email !== offer.email && router.push(`/${offerId}`);
    }, []);

    return (
        <>
            <Head>
                <title>Edit the offer</title>
            </Head>
            <Form
                title="Edit the offer"
                handleChange={(event) => handleChange(event, offer, setOffer)}
                handleSubmit={(event) =>
                    handleSubmit(
                        event,
                        `/api/editOffer/${offerId}`,
                        {
                            method: "PUT",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                            body: offer,
                        },
                        router
                    )
                }
                offer={offer}
            />
        </>
    );
});

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const { offerId } = context.query;
        await connectToMongoDB();
        const doc = JSON.parse(
            JSON.stringify(await offer.findById({ _id: offerId }).exec())
        );

        return {
            props: {
                offerToEdit: doc,
            },
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
}
