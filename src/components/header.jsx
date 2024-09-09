import buscAnime from '../images/Buscanime.svg'
import styles from './header.module.css'

export function Header() {
    return (
        <div className={styles.fundo}>
        <img src={buscAnime}/>
        </div>
    )
}