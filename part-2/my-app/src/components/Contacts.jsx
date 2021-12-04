import { deleteOne } from '../services/persons';

const Person = ({ personInfo, setPersons }) => {
  const handleDelete = () => {
    const willDelete = window.confirm(`Delete ${personInfo.name} ?`);

    willDelete &&
      deleteOne(personInfo.id).then(() =>
        setPersons((ps) => ps.filter((p) => p.id !== personInfo.id))
      );
  };

  return (
    <>
      <p>
        {personInfo.name} {personInfo.number}
      </p>
      <button onClick={handleDelete}>delete</button>
    </>
  );
};

const Contacts = ({ setPersons, persons, show, values, toggle }) => {
  return (
    <div>
      <button onClick={toggle}>{show ? 'Hide' : 'Show'} contacts </button>
      {show &&
        persons &&
        persons
          .filter((p) =>
            p.name.toLowerCase().includes(values.filtered.toLowerCase())
          )
          .map((p) => (
            <Person key={p.name} personInfo={p} setPersons={setPersons} />
          ))}
    </div>
  );
};

export default Contacts;
