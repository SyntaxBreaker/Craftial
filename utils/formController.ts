import React from "react";
import axios from "axios";
import { IImage, IOptions, IForm, IImages } from "types";

export const handleChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  offer: IForm,
  setOffer: React.Dispatch<React.SetStateAction<IForm>>
) => {
  event.preventDefault();
  const { name, value } = event.target;

  if (name === "images") {
    const files = (<HTMLInputElement>event.target).files;
    let images: string[] = [];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.onload = function (e) {
          images.push(reader.result as string);
        };
        reader.readAsDataURL(files[i]);
      }
    }

    setOffer({
      ...offer,
      images: images,
    });

    return;
  }

  setOffer({
    ...offer,
    [name]: value,
  });
};

export const handleSubmit = async (
  event: React.SyntheticEvent,
  URL: string,
  options: IOptions,
  router: any,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();

  try {
    setIsError(false);
    let body = options.body;
    let { images } = body;
    const imageURLs: IImage[] = [];

    for (let i = 0; i < images.length; i++) {
      const image = images[i].split(",")[1];
      const formData = new FormData();
      formData.set("key", `${process.env.IMGBB_API_KEY}`);
      formData.append("image", image);

      const res = await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        data: formData,
      });

      imageURLs.push({
        id: res.data.data.id,
        url: res.data.data.url,
      });
    }

    body = JSON.stringify(
      (body = {
        ...body,
        images: imageURLs,
      })
    );

    fetch(URL, { ...options, body })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    router.push("/");
  } catch (err) {
    setIsError(true);
  }
};
