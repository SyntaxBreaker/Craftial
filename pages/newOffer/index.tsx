import { useState } from "react";
import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Form from "components/Form";
import { IForm } from "types";
import { handleChange, handleSubmit } from "utils/formController";
import Head from "next/head";

export default withPageAuthRequired(function NewOffer({ user }) {
    const [offer, setOffer] = useState<IForm>({
        name: "",
        location: "",
        price: "",
        email: user.email as string,
        phoneNumber: "",
        description: "",
    });

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Create a new offer</title>
            </Head>
            <Form
                title="Create a new offer"
                handleChange={(event) => handleChange(event, offer, setOffer)}
                handleSubmit={(event) =>
                    handleSubmit(
                        event,
                        "api/newOffer",
                        {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(offer),
                        },
                        router
                    )
                }
            />
        </>
    );
});
