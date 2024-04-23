function Events() {
  const takeAshot = () => {
    alert("He Scored The goal");
  };

  var anotherAlertfunctionForOnClickEvent = (a, b) => {
    alert(a + b);
  };
  const truthy = true;
  const boy = "boy";
  return (
    <div>
      <button onClick={takeAshot()}>ShootWithoutTheParenthisis</button>
      <button onClick={() => takeAshot()}>
        ShootWithCallingTheParenthisis
      </button>
      <button
        onClick={() => alert("he took another Shot, but hit the crossbar")}
      >
        take another shot
      </button>
      <button onClick={() => anotherAlertfunctionForOnClickEvent(6, 5)}>
        shoot your shot
      </button>
      <p>{truthy ? "i am a boy" : "i am a girl"}</p>
      <p>{boy == "boy" && "a am a boy"}</p>
    </div>
  );
}

export default Events;
