function Lists() {
  const arr = [
    { id: 1, name: "Kelvin" },
    { id: 2, name: "Desmond" },
    { id: 3, name: "Benedict" },
    { id: 4, name: "Osas" },
  ];
  console.log(arr);
  return (
    <div>
      <ul>
        {arr.map((item) => {
          return (
            <>
              <li key={item.id}>
                {item.name}---------{item.id}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Lists;
