import { IOffer, IUser } from "types";
import Offers from "components/Offers";
import ProfileDetails from "components/ProfileDetails";
import styles from "./profileLayout.module.scss";

function ProfileLayout({ offers, user }: { offers: IOffer[]; user: IUser }) {
  return (
    <section className={styles["profile"]}>
      <ProfileDetails {...user} />
      <Offers offers={offers} title="Your offers!" />
    </section>
  );
}

export default ProfileLayout;
