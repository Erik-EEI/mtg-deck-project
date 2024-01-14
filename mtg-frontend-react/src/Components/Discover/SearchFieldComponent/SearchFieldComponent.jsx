import './SearchFieldComponent.css';
const SearchFieldComponent = ({ value, onChange, placeholderText }) => {
    const handleOnChange = ( value ) => {
        onChange(value);
    }

    return (
        <input
            type='text'
            placeholder={placeholderText}
            value={value}
            onChange={(e) => handleOnChange(e.target.value)}
            className='search-field-component'
        />
    );
};

export default SearchFieldComponent;
