import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import Form from "../../components/Form";
import { IForm } from "../../types";
import { useRouter } from "next/router";
import connectToMongoDB from "../../utils/mongoDB";
import offer from "../../models/offer";
import { GetServerSidePropsContext } from "next";

export default withPageAuthRequired(function EditOffer({ offerToEdit, user }) {
    const [offer, setOffer] = useState<IForm>({
        name: offerToEdit.name,
        location: offerToEdit.location,
        price: offerToEdit.price,
        email: offerToEdit.email,
        phoneNumber: offerToEdit.phoneNumber,
        description: offerToEdit.description,
    });

    const router = useRouter();
    const { offerId } = router.query;

    useEffect(() => {
        user.email !== offer.email && router.push(`/${offerId}`);
    }, []);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        event.preventDefault();
        const { name, value } = event.target;
        setOffer({
            ...offer,
            [name]: value,
        });
    };

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        fetch(`/api/editOffer/${offerId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(offer),
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        router.push("/");
    };

    return (
        <Form
            title="Edit the offer"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            offer={offer}
        />
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
