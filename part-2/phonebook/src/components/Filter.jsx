const Filter = ({ show, handleChange, filteredValues }) => {
  return (
    <>
      <span style={{ textDecoration: show ? 'none' : 'line-through' }}>
        filter shown with
      </span>{' '}
      <input
        name="filtered"
        onChange={handleChange}
        value={filteredValues}
        disabled={!show}
      />
    </>
  );
};

export default Filter;
