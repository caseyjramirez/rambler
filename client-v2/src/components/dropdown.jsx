function Dropdown({ data, onChange }) {

    return (
        <select onChange={(e) => {onChange(e.target.value)}} name="cars" id="cars">
            <option selected>All</option>
            {
                data.map(option => <option value={option.name}>{option.name}</option>)
            }
        </select>
    );
}

export default Dropdown;