/* eslint-disable react/prop-types */
import styles from './styles.module.css'

export const MainSection = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
