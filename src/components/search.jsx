import styles from './search.module.css'

export function Search() {
    return ( 
    <div className={styles.Search}>
        <input type="text" 
        placeholder="Digite algo aqui..." 
        />
        <button>Buscar</button>
    </div>

    )
}