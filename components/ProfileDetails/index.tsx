import Image from "next/image";
import { IUser } from "types";
import styles from "./profileDetails.module.scss";

function ProfileDetails(user: IUser) {
  return (
    <section className={styles["profile-details"]}>
      <div className={styles["profile-details__image-wrapper"]}>
        <Image src={user.picture} height={100} width={100} />
      </div>
      <p className={styles["profile-details__email"]}>
        Email:{" "}
        <span className={styles["profile-details__email--bold"]}>
          {user.email}
        </span>
      </p>
      <p className={styles["profile-details__nickname"]}>
        Nickname:{" "}
        <span className={styles["profile-details__nickname--bold"]}>
          {user.nickname}
        </span>
      </p>
    </section>
  );
}

export default ProfileDetails;
