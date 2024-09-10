import styles from './filters.module.css'

export function Filters() {
    return (
        <div className={styles.filters}>
            <a href="">All Formats</a>
            <button>TV Show</button>
            <button>Movie</button>
            <button>TV Short</button>
            <button>Special</button>
            <button>OVA</button>
            <button>ONA</button>
            <button>Music</button>
        </div>
        
    )

}