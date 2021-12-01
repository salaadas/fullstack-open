const Note = ({ note }) => <li>{note.content}</li>;

const Notes = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      {notes.map((n) => (
        <Note note={n} key={n.id} />
      ))}
    </div>
  );
};

export default Notes;
