import logoApp from '../../assets/logo.svg'
import Button from '../Button'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logoApp} alt="Логотип" className={styles.logo}/>
        <span className={styles.span}>X</span>
        <Button/>
    </header>
  )
}

export default Header