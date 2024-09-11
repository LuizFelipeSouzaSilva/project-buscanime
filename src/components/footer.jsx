import styles from './footer.module.css'

import buscAnime from '../images/Buscanime.svg'

export function Footer() {
    return (
        <div className={styles.footer}>
        <img src={buscAnime}/>
        <h3>TODOS OS DIREITOS RESERVADOS</h3>
        </div>
    )
}