import styles from "../styles/components/searchBar.module.css"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(query)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
    setQuery('')
  };

  return (
    <form onSubmit={handleSubmit} className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Pesquisar por nome"
        value={query}
        onChange={handleChange}
      />
      <button type="submit"><FaSearch className={styles.SearchIcon}/></button>
    </form>
  );
};

export default SearchBar;