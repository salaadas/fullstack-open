const Total = ({ course }) => {
  const sum = course.parts.reduceRight((total, c) => total + c.exercises, 0);
  return (
    <p>
      <strong> Number of exercises {sum}</strong>
    </p>
  );
};

export default Total;
