import styles from './styles.module.css'

export const Banner = () => {
  return (
    <div className={styles.container}>
      <img src="./logo.svg" alt="Jordan Shoes Logo" />
      <div className={styles.textsContainer}>
        <h1>A melhor loja de Jordan</h1>
        <p>O tênis Jordan é fruto de uma velha e forte <br/> parceria entre a Nike e o jogador Michael Jordan.</p>
      </div>
    </div>
  )
}
