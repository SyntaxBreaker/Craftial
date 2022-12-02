import styles from "utils/form.module.scss";
import { IForm } from "types";
import Image from "next/image";
import { handleRemoveAddedImages } from "utils/formController";

interface IOffer {
  title: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (event: React.SyntheticEvent) => void;
  offer?: IForm;
  isError: boolean;
  setOffer: React.Dispatch<React.SetStateAction<IForm>>;
}

function Form({
  title,
  handleChange,
  handleSubmit,
  offer,
  isError,
  setOffer,
}: IOffer) {
  return (
    <section className={styles["form-container"]}>
      <h2 className={styles["form-container__title"]}>{title}</h2>
      {isError && (
        <p className={styles["form-container__error"]}>
          An error has occurred. Refill the form correctly.
        </p>
      )}
      <form onSubmit={handleSubmit} className={styles["form-container__form"]}>
        <div className={styles["form-container__item"]}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles["form-container__input"]}
            onChange={handleChange}
            value={offer?.name}
            required
          />
        </div>
        <div className={styles["form-container__item"]}>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            className={styles["form-container__input"]}
            onChange={handleChange}
            value={offer?.price}
            required
          />
        </div>
        <div className={styles["form-container__item"]}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            className={styles["form-container__input"]}
            onChange={handleChange}
            value={offer?.location}
            required
          />
        </div>
        <div className={styles["form-container__item"]}>
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className={styles["form-container__input"]}
            onChange={handleChange}
            value={offer?.phoneNumber}
            required
          />
        </div>
        {offer?.addedImages && offer.addedImages.length > 0 && (
          <div
            className={`${styles["form-container__item"]} ${styles["form-container__item--full-width"]}`}
          >
            <p>Added images</p>
            <div className={`${styles["form-container__images"]}`}>
              {offer?.addedImages.map((image) => (
                <Image
                  key={image.id}
                  src={image.url}
                  alt=""
                  width="220px"
                  height="220px"
                  className={styles["form-container__image"]}
                  onClick={() =>
                    handleRemoveAddedImages(image._id, offer, setOffer)
                  }
                />
              ))}
            </div>
            <p className={`${styles["form-container__instruction"]}`}>
              Click the image to remove it.
            </p>
          </div>
        )}
        <div
          className={`${styles["form-container__item"]} ${styles["form-container__item--full-width"]}`}
        >
          <label htmlFor="images">Images</label>
          <input
            name="images"
            id="images"
            type="file"
            multiple={true}
            className={`${styles["form-container__input"]} ${styles["form-container__input--textarea"]}`}
            onChange={handleChange}
            required={
              offer?.addedImages && offer.addedImages.length > 0 ? false : true
            }
          />
        </div>
        <div
          className={`${styles["form-container__item"]} ${styles["form-container__item--full-width"]}`}
        >
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows={12}
            cols={12}
            className={`${styles["form-container__input"]} ${styles["form-container__input--textarea"]}`}
            onChange={handleChange}
            value={offer?.description}
            required
          />
        </div>
        <div className={styles["form-container__item"]}>
          <input
            type="submit"
            value="Submit"
            className={`${styles["form-container__input"]} ${styles["form-container__input--submit"]}`}
          />
        </div>
      </form>
    </section>
  );
}

export default Form;
