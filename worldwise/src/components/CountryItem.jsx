/* eslint-disable react/prop-types */
import { useCity } from "../contexts/CitiesContext";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const {flagemojiToPNG} = useCity();
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
