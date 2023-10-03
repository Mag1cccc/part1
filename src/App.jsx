function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return <h1> {props.course.name} </h1>;
  };

  const Content = (props) => {
    return (
      <>
        {props.course.parts.map((el, key) => {
          return (
            <div key={key}>
              {el.name} {el.exercises}
            </div>
          );
        })}
      </>
    );
  };

  const Total = (props) => {
    let total = 0;
    {
      props.course.parts.map((el) => {
        total += el.exercises;
      });
    }
    return <h2> {total} </h2>;
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
