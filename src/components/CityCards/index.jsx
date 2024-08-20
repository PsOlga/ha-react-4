import styles from "./styles.module.css";

function СityCard({ city }) {
  return (
    <div className={styles.CardCity}>


      <h1 className={styles.cityName}>{city.name}</h1>
      <img className={styles.imageCity} src={city.imageUrl} alt="" />

      <ul className={styles.ulCity}>
        {city.facts.map((fact, i) => (
          <li className={styles.liSelect} key={i}>{fact}</li>
        ))}
      </ul>
      <p className={styles.CityFakts}>{city.description}</p>
    </div>
  );
}

export default СityCard;