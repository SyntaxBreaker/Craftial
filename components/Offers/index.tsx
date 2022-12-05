import { useEffect, useState } from "react";
import styles from "./offers.module.scss";
import { IOffers, IOffer } from "../../types";
import Card from "components/Card";
import SearchBox from "components/SearchBox";

function Offers({ offers, title }: { offers: IOffer[]; title: string }) {
  const [filteredOffers, setFilteredOffers] = useState<null | IOffer[]>(null);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  return (
    <section className={styles["wrapper"]}>
      <h2 className={styles["wrapper-title"]}>{title}</h2>
      <SearchBox
        offers={offers}
        setFilteredOffers={setFilteredOffers}
        setIsFiltered={setIsFiltered}
      />
      <div className={styles["offers"]}>
        {isFiltered && filteredOffers ? (
          filteredOffers.length > 0 ? (
            <>
              {filteredOffers?.map((offer) => (
                <Card {...offer} key={offer._id} />
              ))}
            </>
          ) : (
            <p>There are no filtered offers.</p>
          )
        ) : (
          <>
            {offers.map((offer) => (
              <Card {...offer} key={offer._id} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Offers;
