import React from "react";
import styles from "./CharacterCard.module.scss";

export const CharacterCard = ({ character, onClick, isSelected }) => {
  return (
    <div
      className={`${styles.characterCard} ${isSelected && styles.isSelected}`}
      onClick={onClick}
    >
      <img
        className={styles.image}
        src={character.image}
        alt={character.name}
      />
      <div className={styles.info}>
        <h1 className={styles.name}>{character.name}</h1>
        <p>
          <div
            className={`${styles.status} ${
              character.status === "Alive" ? styles.alive : styles.dead
            }`}
          />
          {character.status} - {character.species}
        </p>
      </div>
    </div>
  );
};
