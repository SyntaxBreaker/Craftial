import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Form from "../../components/Form";
import { IForm } from "../../types";

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

        fetch("api/newOffer", {
            method: "POST",
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
            title="Create a new offer"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
});
