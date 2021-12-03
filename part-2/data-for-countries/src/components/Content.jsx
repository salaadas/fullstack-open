const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((c) => (
        <Part key={c.id} name={c.name} exercises={c.exercises} />
      ))}
    </div>
  );
};

export default Content;
