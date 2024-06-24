import styles from './styles.module.css'

export const SneakersSection = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
