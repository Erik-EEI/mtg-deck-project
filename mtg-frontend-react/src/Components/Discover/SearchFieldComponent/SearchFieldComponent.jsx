import './SearchFieldComponent.css';
const SearchFieldComponent = ({ value, onChange, placeholderText }) => {
    return (
        <input
            type='text'
            placeholder={placeholderText}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='search-field-component'
        />
    );
};

export default SearchFieldComponent;