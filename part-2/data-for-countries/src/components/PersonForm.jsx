const PersonForm = ({ handleSubmit, handleChange, values }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input name="name" value={values.name} onChange={handleChange} />
        number:{' '}
        <input
          name="number"
          type="tel"
          value={values.number}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
