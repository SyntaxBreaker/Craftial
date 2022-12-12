import { useState, useEffect } from "react";
import styles from "./search.module.scss";
import { IOffer } from "types";

interface IProps {
  offers: IOffer[];
  setFilteredOffers: React.Dispatch<React.SetStateAction<IOffer[] | null>>;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchBox({ offers, setFilteredOffers, setIsFiltered }: IProps) {
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;

    setSearchInput(value);

    if (value === "") {
      setIsFiltered(false);
      return;
    }

    setIsFiltered(true);
  };

  useEffect(() => {
    setFilteredOffers(
      offers!.filter((offer) =>
        Object.values(offer).some((elem) =>
          elem.toString().toLowerCase().includes(searchInput?.toLowerCase())
        )
      )
    );
  }, [searchInput]);

  return (
    <form
      className={styles["form"]}
      onSubmit={(event) => event.preventDefault()}
    >
      <span className={styles["form__icon"]}>🔍</span>
      <input
        type="search"
        placeholder="Search for..."
        className={styles["form__input"]}
        onChange={handleChange}
        tabIndex={5}
      />
    </form>
  );
}

export default SearchBox;
