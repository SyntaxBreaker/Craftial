import Image from "next/image";
import { IUser } from "types";
import styles from "./profileDetails.module.scss";

function ProfileDetails(user: IUser) {
  return (
    <section className={styles["profile-details"]}>
      <div className={styles["profile-details__image-wrapper"]}>
        <Image src={user.picture} height={100} width={100} />
      </div>
      {user.nickname}
    </section>
  );
}

export default ProfileDetails;
