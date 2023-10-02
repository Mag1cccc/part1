function App() {
  const course = "Half stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;

  const Header = (props) => {
    return <h1> {props.course} </h1>;
  };

  const Part = (props) => {
    return (
      <>
        <p>
          {props.parts} {props.exercise}
        </p>
      </>
    );
  };

  const Content = () => {
    return (
      <>
        <Part parts={part1} exercise={exercises1} />
        <Part parts={part2} exercise={exercises2} />
        <Part parts={part3} exercise={exercises3} />
      </>
    );
  };

  const Total = (props) => {
    return <p> {props.total} </p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={total} />
    </div>
  );
}

export default App;
