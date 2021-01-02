import './search-box.styles.css';

// functional components just gets some props and returns some html
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}>
    </input>
     
)