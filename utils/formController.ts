import { IForm } from "types";

export const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    offer: IForm,
    setOffer: React.Dispatch<React.SetStateAction<IForm>>
) => {
    event.preventDefault();
    const { name, value } = event.target;
    setOffer({
        ...offer,
        [name]: value,
    });
};

export const handleSubmit = (
    event: React.SyntheticEvent,
    URL: string,
    options: object,
    router: any
) => {
    event.preventDefault();

    fetch(URL, options)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    router.push("/");
};
