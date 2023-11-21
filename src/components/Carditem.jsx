import React from "react";
import styles from "../components/css/carditem.module.css";
function Carditem({ data }) {
  console.log(data);
  return (
    <div className={styles.part}>
      <img className={styles.img} src={data.image} />
      <div className={styles.part2}>
        <h3 className={styles.h3}>{data.title}</h3>
        <div style={{ display: "flex", gap: "5rem" }}>
          <p>pages : {data.pages}</p>
          <p>language : {data.language}</p>
        </div>
      </div>
    </div>
  );
}

export default Carditem;
