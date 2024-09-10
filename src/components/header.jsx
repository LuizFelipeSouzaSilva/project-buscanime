import buscAnime from '../images/Buscanime.svg'
import styles from './header.module.css'

export function Header() {
    return (
        <div className={styles.header}>
        <img src={buscAnime}/>
        </div>
    )
}