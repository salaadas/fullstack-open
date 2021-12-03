import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
);

const Courses = ({ courses }) => (
  <div>
    {courses.map((course) => (
      <Course course={course} key={course.id} />
    ))}
  </div>
);

export default Courses;
