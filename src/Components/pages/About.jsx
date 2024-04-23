import { useContext, useState } from "react";
import { UserContext } from "../../context/context";

function About() {
  const [name, setName] = useState("Os");
  const user = useContext(UserContext);
  return (
    <div>
      <h1>This user is {user}</h1>
      <h1>This user is {name}</h1>
      <ComponentOne />
    </div>
  );
}

const ComponentOne = () => {
  const [name, setName] = useState("Os");
  const newUser = useContext(UserContext);
  return (
    <>
      <h1>My name is {newUser}</h1>
      <h1>My name is {name}</h1>
    </>
  );
};

const ComponentTwo = () => {
  return <h1>My name is </h1>;
};
export default About;
