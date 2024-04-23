import NewCar from "./NewCar";

function Cars() {
  const myCar = "Lexus 380";
  const brand = "Lambgoghini";

  return (
    <div>
      <h1>
        My new Car is called {myCar} and its brand is {brand}
      </h1>
      <NewCar carName={myCar} carBrand={brand} />
    </div>
  );
}

export default Cars;
