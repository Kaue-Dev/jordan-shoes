/* eslint-disable react/prop-types */
import styles from './styles.module.css'

export const SneakerCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={styles.textsContainer}>
        <h3>{props.name}</h3>
        <span>{props.collection}</span>
        <p>{props.price}</p>
      </div>
    </div>
  )
}