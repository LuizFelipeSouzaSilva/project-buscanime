import styles from './search.module.css';

export function Search({ onSearchChange, onSearchClick }) {

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearchClick(); 
    }
  };

  return (

    <div className={styles.Search}>
      <input
        type="text"
        placeholder="Digite algo aqui..."
        onChange={onSearchChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={onSearchClick}>Buscar</button>
    </div>
    
  );
}