const Contacts = ({ persons, show, values, toggle }) => {
  return (
    <div>
      <button onClick={toggle}>{show ? 'Hide' : 'Show'} contacts </button>
      {show &&
        persons
          .filter((p) =>
            p.name.toLowerCase().includes(values.filtered.toLowerCase())
          )
          .map((p) => (
            <p key={p.name}>
              {p.name} {p.number}
            </p>
          ))}
    </div>
  );
};

export default Contacts;
