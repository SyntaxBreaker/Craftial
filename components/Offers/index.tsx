import { useState } from "react";
import styles from "./offers.module.scss";
import { IOffer } from "../../types";
import Card from "components/Card";
import SearchBox from "components/SearchBox";

function Offers({ offers, title }: { offers: IOffer[]; title: string }) {
  const [filteredOffers, setFilteredOffers] = useState<null | IOffer[]>(null);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  return (
    <section className={styles["wrapper"]}>
      <h1 className={styles["wrapper-title"]}>{title}</h1>
      <SearchBox
        offers={offers}
        setFilteredOffers={setFilteredOffers}
        setIsFiltered={setIsFiltered}
      />
      <div className={styles["offers"]}>
        {isFiltered && filteredOffers ? (
          filteredOffers.length > 0 ? (
            <>
              {filteredOffers?.map((offer, idx) => (
                <Card {...offer} key={offer._id} />
              ))}
            </>
          ) : (
            <p>There are no filtered offers.</p>
          )
        ) : (
          <>
            {offers.map((offer, idx) => (
              <Card {...offer} key={offer._id} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Offers;
